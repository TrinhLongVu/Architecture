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

router.delete('/:id', SuKienController.deleteEvent);
router.put('/:id', upload.single('image'), SuKienController.updateEvent);

module.exports = router;
