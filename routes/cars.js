const express = require("express");
const router = express.Router();
const cars = require("../controllers/cars");
const upload = require("../middlewares/upload");

router.route("/").get(cars.getAll).post(upload.single("image"), cars.create);
router
  .route("/:id")
  .get(cars.getOne)
  .put(upload.single("image"), cars.update)
  .delete(cars.remove);

module.exports = router;
