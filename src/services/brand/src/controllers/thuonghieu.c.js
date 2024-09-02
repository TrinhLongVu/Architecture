const ThuongHieu = require('../models/thuonghieu.m');
const uploadImageToCloudinary = require('../utils/uploadImageToCloundinary');

class ThuongHieuController {

    //[GET] /api/v1/brand/getUserId/:BrandId
    async getUserId(req, res) {
        try {
            const { BrandId } = req.params;

            if (!BrandId) {
                return res.status(400).json({ error: 'Brand ID is required' });
            }

            const brand = await ThuongHieu.getUserIdByBrandId(BrandId);

            if (!brand) {
                return res.status(404).json({ message: 'Brand not found' });
            }

            res.status(200).json(brand);

        } catch (err) {
            console.error('Error retrieving user ID:', err);
            res.status(500).json({ error: 'An error occurred while retrieving the user ID' });
        }
    }

    //[GET] /api/v1/brand/getBrandId/:UserId
    async getBrandId(req, res) {
        try {
            const { UserId } = req.params;

            if (!UserId) {
                return res.status(400).json({ error: 'User ID is required' });
            }

            const brand = await ThuongHieu.getBrandIdByUserId(UserId);

            if (!brand) {
                return res.status(404).json({ message: 'No brand found for this user' });
            }

            res.status(200).json(brand);

        } catch (err) {
            console.error('Error retrieving brand by user ID:', err);
            res.status(500).json({ error: 'An error occurred while retrieving brand' });
        }
    }


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

            var AVATAR = 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'; // Default profile pic


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

    async handleNewUser(message) {
        const userData = JSON.parse(message);

        const data = {
            TENTHUONGHIEU: "New brand",
            DIACHI: "Sample Address",
            AVATAR: "",
            LINHVUC: "",
            ID_NGUOIDUNG: userData.ID_TTNGUOIDUNG
        };

        const insertId = await ThuongHieu.create(data);
    }

    // [POST] /api/v1/brand/getBrandInfo
    async getBrandInfo(req, res) {
        try {
            const { BrandId } = req.body; // Get BrandId from req.body

            if (!BrandId) {
                return res.status(400).json({ error: 'Brand ID is required' });
            }

            const brand = await ThuongHieu.getById(BrandId);

            if (!brand) {
                return res.status(404).json({ message: 'Brand not found' });
            }

            res.status(200).json(brand);
        } catch (err) {
            console.error('Error retrieving brand info:', err);
            res.status(500).json({ error: 'An error occurred while retrieving the brand info' });
        }
    }

    // [PUT] /api/v1/brand/updateBrandInfo
    async updateBrandInfo(req, res) {
        try {
            const { BrandId, TENTHUONGHIEU, DIACHI, LINHVUC } = req.body;
            const file = req.file; // Assume image file is being uploaded

            if (!BrandId || !TENTHUONGHIEU || !DIACHI || !LINHVUC ) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            let AVATAR = '';

            if (file && file.buffer) {
                try {
                    AVATAR = await uploadImageToCloudinary(file.buffer);
                } catch (uploadError) {
                    console.error('Cloudinary upload error:', uploadError);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
            }

            // Prepare data for update
            const data = {
                TENTHUONGHIEU,
                DIACHI,
                AVATAR: AVATAR || undefined,
                LINHVUC
            };

            await ThuongHieu.update(BrandId, data);

            res.status(200).json({ message: 'Brand info updated successfully' });
        } catch (err) {
            console.error('Error updating brand info:', err);
            res.status(500).json({ error: 'An error occurred while updating the brand info' });
        }
    }
}

module.exports = new ThuongHieuController();
