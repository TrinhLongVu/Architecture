
const uploadImageToCloudinary = require('../utils/uploadImageToCloundinary')
const moment = require('moment');

const SuKien = require('../models/sukien.m');

class SuKienController {
    //[POST] /api/v1/sukien
    //For example:
    // {
    //     ID_THUONGHIEU: 1
    //     name:Su Kien 1
    //     startDate: 2024 -08 - 10T14:00:00Z
    //     endDate: 2024 -08 - 10T16:00:00Z
    //     gameType:Trivial Quiz
    //     image:file input
    // }
    async createSuKien(req, res) {
    try {
        // Extract file and other data from request
        const { ID_THUONGHIEU, name, startDate, endDate, gameType } = req.body;
        const file = req.file; // File information from multer

        // Validate required fields
        if (!ID_THUONGHIEU || !name || !startDate || !endDate || !gameType) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        let HINHANH = '';

        // If a file is provided, upload it and get the URL
        if (file && file.buffer) {
            try {
                HINHANH = await uploadImageToCloudinary(file.buffer);
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ error: 'Error uploading image' });
            }
        }

        // Convert dates to MySQL DATETIME format
        const formattedStartDate = moment(startDate).format('YYYY-MM-DD HH:mm:ss');
        const formattedEndDate = moment(endDate).format('YYYY-MM-DD HH:mm:ss');

        // Create new event record in the database
        const data = {
            ID_THUONGHIEU,
            TENSUKIEN: name,
            HINHANH,
            TGBATDAU: formattedStartDate,
            TGKETTHUC: formattedEndDate,
            GAME_TYPE: gameType
        };

        const insertId = await SuKien.create(data);
        res.status(201).json({ message: 'Event created successfully', id: insertId });

    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ error: 'An error occurred while creating the event' });
    }
}
}

module.exports = new SuKienController();
