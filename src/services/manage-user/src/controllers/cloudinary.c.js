import { uploadImage, getImage, updateImage, deleteImage } from '../services/cloudinary.s.js';

export const uploadImageController = async (req, res) => {
  try {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileBuffer = req.file.buffer;

    // Process the buffer as needed
    //console.log('Received buffer:', fileBuffer);

    // Convert buffer to base64 if needed
    const base64Image = fileBuffer.toString('base64');
    //console.log('Base64 image:', base64Image);

    const result = await uploadImage(base64Image);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

export const getImageController = async (req, res) => {
  try {
    const { public_id } = req.params;
    const result = await getImage(public_id);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateImageController = async (req, res) => {
  try {
    const { public_id } = req.params;
    const { base64Image } = req.body;
    const result = await updateImage(public_id, base64Image);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteImageController = async (req, res) => {
  try {
    const { public_id } = req.params;
    const result = await deleteImage(public_id);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
