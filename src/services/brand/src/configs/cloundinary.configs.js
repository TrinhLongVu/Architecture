const cloudinary = require('cloudinary').v2; // Import Cloudinary SDK

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});



module.exports = cloudinary; // Export the configured Cloudinary instance
