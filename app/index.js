require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const morgan = require("morgan");
const formatDate = require("../utils/date");
const car = require("../routes/car");
const cars = require("../routes/cars");
const render = require("../routes/render");
const ApiError = require("../utils/apiError");
const errorHandler = require("../controllers/error");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  res.locals.formatDate = formatDate;
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use(flash());

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is working fine",
  });
});
app.use("/admin", render);
app.use("/api/v1/car", car);
app.use("/api/v1/cars", cars);

app.all("*", (req, res, next) => {
  next(new ApiError(404, `Route ${req.params[0]} not found`));
});

app.use(errorHandler);

module.exports = app;
