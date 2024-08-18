const express = require('express');
const router = express.Router();
const ThuongHieuController = require('../controllers/thuonghieu.c');


router.post('/', ThuongHieuController.createBrand);

module.exports = router;
