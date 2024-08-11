import cloudinary from '../config/cloudinary.config.js';

export const uploadImage = async (base64Image) => {
  const result = await cloudinary.uploader.upload(base64Image, {});
  return result;
};

export const getImage = async (public_id) => {
  const result = await cloudinary.api.resource(public_id);
  return result;
};

export const updateImage = async (public_id, base64Image) => {
  await cloudinary.uploader.destroy(public_id);
  const result = await cloudinary.uploader.upload(base64Image, {});
  return result;
};

export const deleteImage = async (public_id) => {
  const result = await cloudinary.uploader.destroy(public_id);
  return result;
};
