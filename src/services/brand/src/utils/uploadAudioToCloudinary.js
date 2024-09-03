const cloudinary = require('../configs/cloundinary.configs');

// Function to upload audio to Cloudinary
const uploadAudioToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                resource_type: 'video',
                folder: 'kientrucphanmem/audio',
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

module.exports = uploadAudioToCloudinary;
