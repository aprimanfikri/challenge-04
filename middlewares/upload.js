const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only .png, .jpg, and .jpeg formats are allowed!"), false);
  }
};

const limits = { fileSize: 5 * 1024 * 1024 };

const upload = multer({ fileFilter, limits });

module.exports = upload;
