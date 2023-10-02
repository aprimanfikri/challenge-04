const Car = require("../models/car");
const fs = require("fs");
const path = require("path");

const getAll = async (req, res) => {
  try {
    let query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    if (req.query.name) {
      query.name = { $regex: req.query.name, $options: "i" };
    }
    const cars = await Car.find(query);
    res.status(200).json({
      status: "success",
      message: "Get all cars",
      result: cars,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const car = new Car({
      ...req.body,
      image: req.file.filename,
    });
    // req.session.message = {
    //   type: "success",
    //   message: "Car has been created successfully",
    // };
    await car.save();
    res.status(201).json({
      status: "success",
      message: "Car has been created successfully",
      result: car,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    const oldImage = car.image;
    if (req.file && req.file.filename) {
      if (oldImage) {
        const imagePath = path.join("public/images/", oldImage);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      car.image = req.file.filename;
    }
    await car.save();
    // req.session.message = {
    //   type: "success",
    //   message: "Car has been updated successfully",
    // };
    res.status(200).json({
      status: "success",
      message: "Car has been updated successfully",
      result: car,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getOne = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Get one car",
      result: car,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    const imagePath = path.join("public/images/", car.image);
    if (imagePath) {
      fs.unlinkSync(imagePath);
    }
    // req.session.message = {
    //   type: "dark",
    //   message: "Car has been deleted successfully",
    // };
    res.status(200).json({
      status: "success",
      message: "Car has been deleted successfully",
      result: car,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getAll,
  create,
  update,
  getOne,
  remove,
};
