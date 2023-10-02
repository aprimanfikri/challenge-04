const Car = require("../models/car");

const dashboard = async (req, res) => {
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
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const create = (req, res) => {
  res.render("create", {
    title: "Create new car",
    query: req.query,
  });
};

const update = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id);
    res.render("update", {
      cars: car,
      title: "Update car",
      query: req.query,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  dashboard,
  create,
  update,
};
