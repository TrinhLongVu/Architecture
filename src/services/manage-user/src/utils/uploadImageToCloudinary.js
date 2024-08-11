import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadBase64Image = async (base64String) => {
  try {
    const result = await cloudinary.uploader.upload(base64String, {
      folder: 'sample_folder', // Optional: specify a folder to upload to
      use_filename: true, // Optional: use the original filename
      unique_filename: false // Optional: do not generate a unique filename
    });
    console.log('Image uploaded successfully:', result);
    return result;
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};