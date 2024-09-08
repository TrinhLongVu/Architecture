const express = require('express');
const router = express.Router();
const SuKienController = require('../controllers/sukien.c');
const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory for processing
const upload = multer({ storage: storage });

router.get('/', SuKienController.getAllEvents);
router.post('/', upload.single('image'), SuKienController.createEvent);

router.get('/coming', SuKienController.getComingEvents);
router.get('/past', SuKienController.getPastEvents);
router.get('/happening/count', SuKienController.countHappeningEvents);
router.get('/happening', SuKienController.getHappeningEvents);


router.get('/coming/:idThuongHieu', SuKienController.getComingEventsByBrand);
router.get('/past/:idThuongHieu', SuKienController.getPastEventsByBrand);
router.get('/happening/:idThuongHieu/count', SuKienController.countHappeningEventsByBrand);

router.get('/search', SuKienController.searchEvents);
router.get('/search/:idThuongHieu', SuKienController.searchEventsByBrand);


router.get('/:id', SuKienController.getEvent);
router.delete('/:id', SuKienController.deleteEvent);
router.put('/:id', upload.single('image'), SuKienController.updateEvent);

router.get('/statistic/last7days', SuKienController.countEventsByGameTypeForLast7Days);

module.exports = router;
