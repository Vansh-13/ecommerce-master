// // const dotenv = require("dotenv");
// // import dotenv from 
// // const cloudinaryModule = require("cloudinary");
// import cloudinaryModule from 'cloudinary';

// // dotenv.config();
// const cloudinary = cloudinaryModule.v2;

// cloudinary.config({
//     // cloud_name: process.env.CLOUD_NAME,
//     // api_key: process.env.API_KEY,
//     // api_secret: process.env.API_SECRET,
//     cloud_name: 'dwrr4tgvn',
//     api_key: '842221682915591',
//     api_secret: 'ebMpVPVKYDu-iVqU7s-bmzfo7a8',
// });

// // module.exports = cloudinary;
// export default cloudinary;

// Import the necessary modules using ES Module syntax

import cloudinaryModule from 'cloudinary';

// Configure Cloudinary
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
cloud_name: 'dwrr4tgvn',
 api_key: '842221682915591',
 api_secret: 'ebMpVPVKYDu-iVqU7s-bmzfo7a8',
});

// Export Cloudinary using ES Module syntax
export default cloudinary;
