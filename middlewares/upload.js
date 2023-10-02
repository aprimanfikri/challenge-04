const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "public/images/",
  filename: async function (req, file, cb) {
    try {
      const fileName = "car-" + Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    } catch (err) {
      cb(err, null);
    }
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Only image/png and image/jpeg files are allowed"), false);
  }
};

const limits = { fileSize: 5 * 1024 * 1024 };

const upload = multer({ storage, fileFilter, limits });

module.exports = upload;
