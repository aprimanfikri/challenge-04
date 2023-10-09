const Car = require("../models/car");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");

const getAll = async (req, res, next) => {
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
      data: cars,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to find cars: " + error.message));
  }
};

const create = async (req, res, next) => {
  let image;
  try {
    if (req.file) {
      const file = req.file;
      const split = file.originalname.split(".");
      const extension = split[split.length - 1];
      const img = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      });
      image = img.url;
    }
    const car = new Car({
      ...req.body,
      image,
    });
    await car.save();
    res.status(201).json({
      status: "success",
      message: "Car has been created successfully",
      data: car,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to create car: " + error.message));
  }
};

const update = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!car) {
      return next(new ApiError(404, `Car with id ${req.params.id} not found`));
    }
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
      data: car,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to update car: " + error.message));
  }
};

const getOne = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return next(new ApiError(404, `Car with id ${req.params.id} not found`));
    }
    res.status(200).json({
      status: "success",
      message: `Get car with id ${req.params.id} successfully`,
      data: car,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to find car: " + error.message));
  }
};

const remove = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return next(new ApiError(404, `Car with id ${req.params.id} not found`));
    }
    res.status(200).json({
      status: "success",
      message: "Car has been deleted successfully",
      data: car,
    });
  } catch (error) {
    next(new ApiError(500, "Failed to create car: " + error.message));
  }
};

module.exports = {
  getAll,
  create,
  update,
  getOne,
  remove,
};
