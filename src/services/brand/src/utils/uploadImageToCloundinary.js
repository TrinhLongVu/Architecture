const cloudinary = require('../configs/cloundinary.configs');

// Function to upload image to Cloudinary
const uploadImageToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: 'kientrucphanmem' },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(fileBuffer); // End the stream with file buffer
    });
};

module.exports = uploadImageToCloudinary;
