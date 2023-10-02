const express = require("express");
const router = express.Router();
const render = require("../controllers/render");

router.get("/dashboard", render.dashboard);
router.get("/create", render.create);
router.get("/update/:id", render.update);

module.exports = router;
