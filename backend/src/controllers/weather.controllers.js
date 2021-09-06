const { getForecast } = require("../models/weather.models");

const getWeatherForecast = async (req, res) => {
  const { city } = req.params;

  try {
    const weather = await getForecast(city);
    res.status(200).json(weather);
  } catch (err) {
    console.error(err, err.stack);
    res.status(404).json(err);
  }
};

module.exports = { getWeatherForecast };
