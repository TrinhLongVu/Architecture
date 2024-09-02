
const uploadImageToCloudinary = require('../utils/uploadImageToCloundinary');

const moment = require('moment-timezone');

// Set default timezone to Vietnam (UTC+7)
moment.tz.setDefault('Asia/Ho_Chi_Minh');

const SuKien = require('../models/sukien.m');

class SuKienController {

    //[GET] /api/v1/event
    async getAllEvents(req, res) {
        try {
            const events = await SuKien.getAll();
            res.status(200).json(events);
        } catch (err) {
            console.error('Error retrieving events:', err);
            res.status(500).json({ error: 'An error occurred while retrieving events' });
        }
    }

    //[GET] /api/v1/event/coming
    async getComingEvents(req, res) {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            const events = await SuKien.getComingEvents(now);
            res.status(200).json(events);
        } catch (err) {
            console.error('Error retrieving coming events:', err);
            res.status(500).json({ error: 'An error occurred while retrieving coming events' });
        }
    }

    //[GET] /api/v1/event/past
    async getPastEvents(req, res) {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log("now", now)
            const events = await SuKien.getPastEvents(now);
            res.status(200).json(events);
        } catch (err) {
            console.error('Error retrieving past events:', err);
            res.status(500).json({ error: 'An error occurred while retrieving past events' });
        }
    }

    //[GET] /api/v1/event/happening/count
    async countHappeningEvents(req, res) {
        try {
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log("now", now);

            const count = await SuKien.countHappeningEvents(now);

            res.status(200).json({ count });
        } catch (err) {
            console.error('Error counting happening events:', err);
            res.status(500).json({ error: 'An error occurred while counting happening events' });
        }
    }

    //[GET] /api/v1/event/coming/:idThuongHieu
    async getComingEventsByBrand(req, res) {
        try {
            const { idThuongHieu } = req.params;
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            const events = await SuKien.getComingEventsByBrand(idThuongHieu, now);
            res.status(200).json(events);
        } catch (err) {
            console.error('Error retrieving coming events by brand:', err);
            res.status(500).json({ error: 'An error occurred while retrieving coming events by brand' });
        }
    }

    //[GET] /api/v1/event/past/:idThuongHieu
    async getPastEventsByBrand(req, res) {
        try {
            const { idThuongHieu } = req.params;
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            const events = await SuKien.getPastEventsByBrand(idThuongHieu, now);
            res.status(200).json(events);
        } catch (err) {
            console.error('Error retrieving past events by brand:', err);
            res.status(500).json({ error: 'An error occurred while retrieving past events by brand' });
        }
    }

    //[GET] /api/v1/event/happening/:idThuongHieu/count
    async countHappeningEventsByBrand(req, res) {
        try {
            const { idThuongHieu } = req.params;
            const now = moment().format('YYYY-MM-DD HH:mm:ss');
            console.log("now", now);

            const count = await SuKien.countHappeningEventsByBrand(idThuongHieu, now);

            res.status(200).json({ count });
        } catch (err) {
            console.error('Error counting happening events:', err);
            res.status(500).json({ error: 'An error occurred while counting happening events' });
        }
    }

    //[POST] /api/v1/event
    //For example:
    // {
    //     ID_THUONGHIEU: 1
    //     name:Su Kien 1
    //     startDate: 2024 -08 - 10T14:00:00Z
    //     endDate: 2024 -08 - 10T16:00:00Z
    //     gameType:Trivial Quiz
    //     image:file input
    // }
    async createEvent(req, res) {
        try {
            const { ID_THUONGHIEU, name, startDate, endDate, gameType } = req.body;
            const file = req.file;

            if (!ID_THUONGHIEU || !name || !startDate || !endDate || !gameType) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            let HINHANH = '';

            if (file && file.buffer) {
                try {
                    HINHANH = await uploadImageToCloudinary(file.buffer);
                } catch (uploadError) {
                    console.error('Cloudinary upload error:', uploadError);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
            }

            // Convert dates to MySQL DATETIME format in UTC
            const formattedStartDate = moment(startDate).format('YYYY-MM-DD HH:mm:ss');
            const formattedEndDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');

            const data = {
                ID_THUONGHIEU,
                TENSUKIEN: name,
                HINHANH,
                TGBATDAU: formattedStartDate,
                TGKETTHUC: formattedEndDate,
                LOAITROCHOI: gameType
            };

            const insertId = await SuKien.create(data);
            res.status(201).json({ message: 'Event created successfully', id: insertId });

        } catch (err) {
            console.error('Error creating event:', err);
            res.status(500).json({ error: 'An error occurred while creating the event' });
        }
    }


    //[GET] /api/v1/event/:id
    async getEvent(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'Missing event ID' });
            }

            const event = await SuKien.getById(id);

            if (!event) {
                return res.status(404).json({ message: 'Event not found' });
            }

            res.status(200).json(event);

        } catch (err) {
            console.error('Error retrieving event:', err);
            res.status(500).json({ error: 'An error occurred while retrieving the event' });
        }
    }

    //[DELETE] /api/v1/event/:id
    async deleteEvent(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'Missing event ID' });
            }

            await SuKien.remove(id);

            res.status(200).json({ message: 'Event deleted successfully' });

        } catch (err) {
            console.error('Error deleting event:', err);
            res.status(500).json({ error: 'An error occurred while deleting the event' });
        }
    }

    //[PUT] /api/v1/event/:id
    async updateEvent(req, res) {
        try {
            const { id } = req.params;
            const { ID_THUONGHIEU, name, startDate, endDate, gameType } = req.body;
            const file = req.file;

            if (!id || !ID_THUONGHIEU || !name || !startDate || !endDate || !gameType) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            let HINHANH = '';

            if (file && file.buffer) {
                try {
                    HINHANH = await uploadImageToCloudinary(file.buffer);
                } catch (uploadError) {
                    console.error('Cloudinary upload error:', uploadError);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
            }

            const formattedStartDate = moment.utc(startDate).format('YYYY-MM-DD HH:mm:ss');
            const formattedEndDate = moment.utc(endDate).format('YYYY-MM-DD HH:mm:ss');

            const data = {
                ID_THUONGHIEU,
                TENSUKIEN: name,
                HINHANH: HINHANH || undefined,
                TGBATDAU: formattedStartDate,
                TGKETTHUC: formattedEndDate,
                LOAITROCHOI: gameType
            };

            await SuKien.update(id, data);

            res.status(200).json({ message: 'Event updated successfully' });

        } catch (err) {
            console.error('Error updating event:', err);
            res.status(500).json({ error: 'An error occurred while updating the event' });
        }
    }

    //[GET] /api/v1/event/search?term=...
    async searchEvents(req, res) {
        try {
            const { term } = req.query;

            if (!term) {
                return res.status(400).json({ error: 'Search term is required' });
            }

            const events = await SuKien.searchByTerm(term);

            if (events.length === 0) {
                return res.status(404).json({ message: 'No events found' });
            }

            res.status(200).json(events);
        } catch (err) {
            console.error('Error searching events:', err);
            res.status(500).json({ error: 'An error occurred while searching for events' });
        }
    }

    //[GET] /api/v1/event/search/:idThuongHieu
    async searchEventsByBrand(req, res) {
        try {
            const { idThuongHieu } = req.params;
            const { term } = req.query;  // Assuming search term is passed as a query parameter

            if (!term) {
                return res.status(400).json({ error: 'Search term is required' });
            }

            const events = await SuKien.searchByTermAndBrand(term, idThuongHieu);
            res.status(200).json(events);
        } catch (err) {
            console.error('Error searching events by brand:', err);
            res.status(500).json({ error: 'An error occurred while searching for events' });
        }
    }
}

module.exports = new SuKienController();
