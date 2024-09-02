const cloudinary = require('cloudinary').v2; // Import Cloudinary SDK

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME||'dhsz5hhqq',
  api_key: process.env.CLOUDINARY_API_KEY||'267752493966968',
  api_secret: process.env.CLOUDINARY_API_SECRET||'9zgTVua015EHNWgVbHXlKkDQ8xo'
});



module.exports = cloudinary; // Export the configured Cloudinary instance
