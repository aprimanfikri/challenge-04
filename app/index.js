require("dotenv").config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const flash = require("express-flash");
const morgan = require("morgan");
const formatDate = require("../utils/date");
const errorHandler = require("../controllers/error");
const routes = require("../routes");

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

app.use(routes);

app.use(errorHandler);

module.exports = app;
