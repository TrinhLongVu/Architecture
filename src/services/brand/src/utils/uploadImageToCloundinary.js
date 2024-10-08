const cloudinary = require('../configs/cloundinary.configs');

// Function to upload image to Cloudinary
const uploadImageToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                resource_type: 'image',
                folder: 'kientrucphanmem/image' 
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        ).end(fileBuffer);
    });
};

module.exports = uploadImageToCloudinary;
