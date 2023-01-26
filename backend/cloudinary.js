const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "djcwmsu2t",
  api_key: "248761718595317",
  api_secret: "HYGUHBaixV6EH9MvB4ihVY1gQ4s"
});

module.exports = cloudinary;