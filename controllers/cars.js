const Car = require("../models/car");
const fs = require("fs");
const path = require("path");
const imagekit = require("../lib/imagekit");

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
    const file = req.file;
    const split = file.originalname.split(".");
    const extension = split[split.length - 1];
    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${extension}`,
    });
    const car = new Car({
      ...req.body,
      image: img.url,
    });
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
    if (req.file) {
      const split = req.file.originalname.split(".");
      const extension = split[split.length - 1];
      const newImg = await imagekit.upload({
        file: req.file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      });
      car.image = newImg.url;
    }
    await car.save();
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
