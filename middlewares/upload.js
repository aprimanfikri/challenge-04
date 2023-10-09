const multer = require("multer");
const ApiError = require("../utils/apiError");

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new ApiError(400, "Only image files are allowed!"), false);
  }
};

const limits = { fileSize: 5 * 1024 * 1024 };

const upload = multer({ fileFilter, limits });

module.exports = upload;
