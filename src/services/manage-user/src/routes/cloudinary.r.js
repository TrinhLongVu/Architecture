import express from 'express';
import multer from 'multer';

import { uploadImageController, getImageController, updateImageController, deleteImageController } from '../controllers/cloudinary.c.js';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fieldSize: 25 * 1024 * 1024 } // Set limit to 25MB
})

router.post('/upload',upload.single('file'), uploadImageController);
router.get('/image/:public_id', getImageController);
router.put('/update/:public_id', updateImageController);
router.delete('/delete/:public_id', deleteImageController);

export default router;