const VoucherSuKien = require('../models/voucher_sukien.m');

class VoucherSuKienController {
    //[POST] /api/v1/voucher-event/
    //Example data
    // [
    //     {
    //         "ID_VOUCHER": 1,
    //         "ID_SUKIEN": 4,
    //         "SOLUONGVOUCHER": 100
    //     },
    //     {
    //         "ID_VOUCHER": 2,
    //         "ID_SUKIEN": 4,
    //         "SOLUONGVOUCHER": 150
    //     }
    // ]

    static async createOrUpdate(req, res) {
        try {
            const data = req.body; // Expecting an array of objects
    
            // Delete existing records for the event
            if (data.length > 0) {
                const sukienId = data[0].ID_SUKIEN;
                await VoucherSuKien.removeAllByEvent(sukienId);
            }
    
            for (const item of data) {
                await VoucherSuKien.createOrUpdate(item);
            }
    
            res.status(200).json({ message: 'Voucher-Sukien data processed successfully' });
        } catch (error) {
            console.error('Error processing voucher-sukien data:', error);
            res.status(500).json({ error: 'An error occurred while processing voucher-sukien data' });
        }
    }

    //[GET] /api/v1/voucher-event/
    static async getAll(req, res) {
        try {
            const results = await VoucherSuKien.getAll();
            res.status(200).json(results);
        } catch (error) {
            console.error('Error fetching all voucher-sukien data:', error);
            res.status(500).json({ error: 'An error occurred while fetching voucher-sukien data' });
        }
    }

    //[POST] /api/v1/voucher-event/event/:eventId
    static async getAllByEvent(req, res) {
        try {
            const { eventId } = req.params;
            const results = await VoucherSuKien.getAllByEvent(eventId);
            res.status(200).json(results);
        } catch (error) {
            console.error('Error fetching vouchers by SUKIEN ID:', error);
            res.status(500).json({ error: 'An error occurred while fetching vouchers by SUKIEN ID' });
        }
    }

    //[POST] /api/v1/voucher-event/random/:eventId
    //Guaranteed to have voucher
    static async getRandomVoucherByEvent(req, res) {
        try {
            const { eventId } = req.params;

            // Get a random usable voucher
            const voucher = await VoucherSuKien.getRandomUsableVoucher(eventId);
            if (!voucher) {
                return res.status(404).json({ message: 'No usable voucher found for this event' });
            }

            // Increment the usage count
            await VoucherSuKien.incrementUsage(voucher.ID_VOUCHER, eventId);

            // Check if usage exceeds limit and update status if SOLUONGSUDUNG=SOLUONGVOUCHER
            const { SOLUONGVOUCHER, SOLUOTSUDUNG } = voucher;
            if (SOLUOTSUDUNG + 1 > SOLUONGVOUCHER) {
                await VoucherSuKien.markAsUnusable(voucher.ID_VOUCHER, eventId);
            }

            res.status(200).json(voucher);
        } catch (error) {
            console.error('Error fetching random voucher by event:', error);
            res.status(500).json({ error: 'An error occurred while fetching a random voucher' });
        }
    }

    //[GET] /api/v1/voucher-event/random-or-not/:eventId
    //10% change of getting a voucher from eventId
    static async randomOrNot(req, res) {
        try {
            const chance = Math.random(); // Generate a random number between 0 and 1
            const percentage = 0.3; // 30% chance

            if (chance < percentage) {
                // get a random voucher by event
                const { eventId } = req.params;
                if (!eventId) {
                    return res.status(400).json({ error: 'Missing eventId query parameter' });
                }

                const voucher = await VoucherSuKien.getRandomUsableVoucher(eventId);

                if (!voucher) {
                    return res.status(404).json({ message: 'No usable voucher found for this event' });
                }

                await VoucherSuKien.incrementUsage(voucher.ID_VOUCHER, eventId);

                const { SOLUONGVOUCHER, SOLUOTSUDUNG } = voucher;
                if (SOLUOTSUDUNG + 1 > SOLUONGVOUCHER) {
                    await VoucherSuKien.markAsUnusable(voucher.ID_VOUCHER, eventId);
                }

                res.status(200).json(voucher);
            } else {
                // return "Sorry, better luck next time"
                res.status(200).json({ message: 'Sorry, better luck next time' });
            }
        } catch (error) {
            console.error('Error in random-or-not endpoint:', error);
            res.status(500).json({ error: 'An error occurred while processing the request' });
        }
    }

}

module.exports = VoucherSuKienController;
