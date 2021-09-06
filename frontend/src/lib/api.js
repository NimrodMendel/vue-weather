import axios from "axios";

const URL = "http://localhost:5000/api";

export const getWeatherForecast = async (city) => {
  const { data } = await axios.get(`${URL}/${city}`, {
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  return data;
};
