const Voucher = require('../models/voucher.m');
const QRCode = require('qrcode');
const uploadImageToCloudinary = require('../utils/uploadImageToCloundinary');
const moment = require('moment-timezone');

// Set default timezone to Vietnam (UTC+7)
moment.tz.setDefault('Asia/Ho_Chi_Minh');


class VoucherController {

    //[POST] /api/v1/voucher
    async createVoucher(req, res) {
        try {
            const { ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI = 'usable', MOTA } = req.body;
            const file = req.file;

            if (!ID_THUONGHIEU || !NGAYHETHAN || !TRIGIA || !MOTA) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            let HINHANH = '';
            let QRCODE_URL = '';

            if (file && file.buffer) {
                try {
                    HINHANH = await uploadImageToCloudinary(file.buffer);
                } catch (uploadError) {
                    console.error('Cloudinary upload error:', uploadError);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
            }

            // Generate QR code
            const qrCodeData = `Congratulations, you got a ${TRIGIA}VND voucher`;
            let qrCodeImage;
            try {
                qrCodeImage = await QRCode.toBuffer(qrCodeData); // Generate QR code as buffer
            } catch (qrError) {
                console.error('QR Code generation error:', qrError);
                return res.status(500).json({ error: 'Error generating QR code' });
            }

            // Upload QR code image to Cloudinary
            try {
                QRCODE_URL = await uploadImageToCloudinary(qrCodeImage); // Upload QR code image
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ error: 'Error uploading QR code image' });
            }

            // Convert NGAYHETHAN to MySQL DATETIME format
            const formattedNgayHetHan = moment.utc(NGAYHETHAN).format('YYYY-MM-DD HH:mm:ss');

            const data = {
                ID_THUONGHIEU,
                NGAYHETHAN: formattedNgayHetHan,
                TRIGIA,
                TRANGTHAI,
                HINHANH,
                QRCODE: QRCODE_URL,
                MOTA
            };

            const insertId = await Voucher.create(data);
            res.status(201).json({ message: 'Voucher created successfully', id: insertId });

        } catch (err) {
            console.error('Error creating voucher:', err);
            res.status(500).json({ error: 'An error occurred while creating the voucher' });
        }
    }

    //[GET] /api/v1/voucher/random
    async getRandomVoucher(req, res) {
        try {
            const randomVoucher = await Voucher.getRandomVoucher();

            // Check if a usable voucher was found
            if (!randomVoucher || randomVoucher.TRANGTHAI !== 'usable') {
                return res.status(404).json({ error: 'No usable vouchers found' });
            }

            res.status(200).json(randomVoucher);
        } catch (err) {
            console.error('Error fetching random voucher:', err);
            res.status(500).json({ error: 'An error occurred while fetching a random voucher' });
        }
    }

    //[GET] /api/v1/voucher/:idThuongHieu
    async getVouchersByBrand(req, res) {
        try {
            const { idThuongHieu } = req.params;
            const now = moment().format('YYYY-MM-DD HH:mm:ss');  // Get current time in MySQL DATETIME format
            const vouchers = await Voucher.getByBrand(idThuongHieu, now);

            if (!vouchers.length) {
                return res.status(404).json({ error: 'No valid vouchers found for this brand' });
            }

            res.status(200).json(vouchers);
        } catch (err) {
            console.error('Error fetching vouchers by brand:', err);
            res.status(500).json({ error: 'An error occurred while fetching vouchers' });
        }
    }

    //[GET] /api/v1/voucher/voucherId/:id
    async getVoucherById(req, res) {
        try {
            const { id } = req.params;
            const voucher = await Voucher.getById(id);

            if (!voucher) {
                return res.status(404).json({ error: 'Voucher not found' });
            }

            res.status(200).json(voucher);
        } catch (err) {
            console.error('Error fetching voucher by ID:', err);
            res.status(500).json({ error: 'An error occurred while fetching the voucher' });
        }
    }
}

module.exports = new VoucherController();
