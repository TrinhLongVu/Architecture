const ThuongHieu = require('../models/thuonghieu.m');

class ThuongHieuController {

    //[GET] /api/v1/brand
    async getAllBrands(req, res) {
        try {
            const brands = await ThuongHieu.getAll();
            res.status(200).json(brands);
        } catch (err) {
            console.error('Error retrieving brands:', err);
            res.status(500).json({ error: 'An error occurred while retrieving brands' });
        }
    }

    //[POST] /api/v1/brand
    async createBrand(req, res) {
        try {
            const { TENTHUONGHIEU, DIACHI, AVATAR } = req.body;

            if (!TENTHUONGHIEU) {
                return res.status(400).json({ error: 'TENTHUONGHIEU is required' });
            }

            const data = {
                TENTHUONGHIEU,
                DIACHI,
                AVATAR
            };

            const insertId = await ThuongHieu.create(data);
            res.status(201).json({ message: 'Brand created successfully', id: insertId });

        } catch (err) {
            console.error('Error creating brand:', err);
            res.status(500).json({ error: 'An error occurred while creating the brand' });
        }
    }

    //[GET] /api/v1/brand/:id
    async getBrandById(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ error: 'Brand ID is required' });
            }

            const brand = await ThuongHieu.getById(id);

            if (!brand) {
                return res.status(404).json({ message: 'Brand not found' });
            }

            res.status(200).json(brand);

        } catch (err) {
            console.error('Error retrieving brand:', err);
            res.status(500).json({ error: 'An error occurred while retrieving the brand' });
        }
    }
}

module.exports = new ThuongHieuController();
