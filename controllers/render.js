const Car = require("../models/car");
const ApiError = require("../utils/apiError");

const dashboard = async (req, res, next) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }
    const cars = await Car.find(query);
    res.render("index", {
      query: req.query,
      cars: cars,
      reqUrl: req.originalUrl,
      title: "Dashboard",
    });
  } catch (error) {
    next(new ApiError(500, "Failed to find cars: " + error.message));
  }
};

const create = (req, res) => {
  res.render("create", {
    title: "Create new car",
    query: req.query,
  });
};

const update = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id);
    res.render("update", {
      cars: car,
      title: "Update car",
      query: req.query,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to update car: " + error.message));
  }
};

module.exports = {
  dashboard,
  create,
  update,
};
