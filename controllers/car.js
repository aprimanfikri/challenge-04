const Car = require("../models/car");
const imagekit = require("../lib/imagekit");

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
    await Car.findByIdAndDelete(req.params.id);
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
