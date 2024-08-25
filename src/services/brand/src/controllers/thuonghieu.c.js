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
            const { TENTHUONGHIEU, DIACHI, LINHVUC, ID_NGUOIDUNG } = req.body;

            var AVATAR='https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'; // Default profile pic


            if (!TENTHUONGHIEU) {
                return res.status(400).json({ error: 'TENTHUONGHIEU is required' });
            }

            const data = {
                TENTHUONGHIEU,
                DIACHI,
                AVATAR,
                LINHVUC,
                ID_NGUOIDUNG
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
    
    async handleNewUser(message){
        const userData = JSON.parse(message);

        const data = {
            TENTHUONGHIEU: "New brand",
            DIACHI: "Sample Address",
            AVATAR: "",
            LINHVUC:"",
            ID_NGUOIDUNG: userData.ID_TTNGUOIDUNG
        };

        const insertId = await ThuongHieu.create(data);
    }
}

module.exports = new ThuongHieuController();
