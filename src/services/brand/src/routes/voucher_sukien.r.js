const express = require('express');
const router = express.Router();
const VoucherSuKienController = require('../controllers/voucher_sukien.c');

router.post('/', VoucherSuKienController.createOrUpdate);
router.get('/', VoucherSuKienController.getAll);
router.get('/event/:eventId', VoucherSuKienController.getAllByEvent);
router.get('/random/:eventId', VoucherSuKienController.getRandomVoucherByEvent);
router.get('/random-or-not/:eventId', VoucherSuKienController.randomOrNot);

module.exports = router;
