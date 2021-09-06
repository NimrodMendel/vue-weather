const express = require("express");
const { getWeatherForecast } = require("../controllers/weather.controllers");

const router = express.Router();

router.get("/:city", getWeatherForecast);

module.exports = router;
