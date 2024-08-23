const express = require('express');
const router = express.Router();
const VoucherController = require('../controllers/voucher.c');
const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory for processing
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), VoucherController.createVoucher);
router.get('/random', VoucherController.getRandomVoucher);
router.get("/:idThuongHieu",VoucherController.getVouchersByBrand)

module.exports = router;
