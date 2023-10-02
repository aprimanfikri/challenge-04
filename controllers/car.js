const Car = require("../models/car");
const fs = require("fs");
const path = require("path");

const create = async (req, res) => {
  try {
    const car = new Car({
      ...req.body,
      image: req.file.filename,
    });
    req.session.message = {
      type: "success",
      message: "Car has been created successfully",
    };
    await car.save();
    res.redirect("/admin/dashboard");
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
    req.session.message = {
      type: "success",
      message: "Car has been updated successfully",
    };
    res.redirect("/admin/dashboard");
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
    req.session.message = {
      type: "dark",
      message: "Car has been deleted successfully",
    };
    res.redirect("/admin/dashboard");
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { create, update, remove };
