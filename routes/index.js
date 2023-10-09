const express = require("express");
const router = express.Router();
const ApiError = require("../utils/apiError");

const car = require("./car");
const cars = require("./cars");
const render = require("./render");

router.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is working fine",
  });
});

router.use("/admin", render);
router.use("/api/v1/car", car);
router.use("/api/v1/cars", cars);

router.all("*", (req, res, next) => {
  next(new ApiError(404, `Route ${req.params[0]} not found`));
});

module.exports = router;
