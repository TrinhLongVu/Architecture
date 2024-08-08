const express = require('express');
const router = express.Router();
const SuKienController = require('../controllers/sukien.c');
const multer = require("multer");
const storage = multer.memoryStorage(); // Store files in memory for processing
const upload = multer({ storage: storage });

// Route for creating a SuKien event
router.post('/', upload.single('image'), SuKienController.createSuKien);

module.exports = router;
