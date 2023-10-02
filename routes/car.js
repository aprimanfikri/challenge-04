const express = require("express");
const router = express.Router();
const car = require("../controllers/car");
const upload = require("../middlewares/upload");

router.post("/", upload.single("image"), car.create);
router.post("/:id", upload.single("image"), car.update);
router.get("/:id", car.remove);

module.exports = router;
