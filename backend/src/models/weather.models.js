const axios = require("axios");

const searchURL = process.env.API_SEARCH_URL;
const forecastURL = process.env.API_FORECAST_URL;

const getCityWoeid = async (city) => {
  const { data } = await axios.get(`${searchURL}/?query=${city}`);

  if (data) {
    return data[0].woeid;
  }

  return null;
};

const getForecast = async (city) => {
  const woeid = await getCityWoeid(city);

  if (!woeid) {
    return { error: `Can't get data for: ${city}` };
  }

  const { data } = await axios.get(`${forecastURL}/${woeid}`);

  return data;
};

module.exports = { getForecast };
