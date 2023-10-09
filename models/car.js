const mongoose = require("mongoose");

const car = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    image: {
      type: String,
      default:
        "https://seasideautomotive.com/wp-content/themes/motors-child/assets/images/automanager_placeholders/plchldr798automanager.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", car);
