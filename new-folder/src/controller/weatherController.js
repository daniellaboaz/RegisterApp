const { findWeather } = require("../model/weather");

const userGetWeather = async (req, res) => {
  try {
    const search = req.params.location;
    const weather = await findWeather(search);
    res.status(200).send(`temp is: ${weather[0].current.temperature}C`);
  } catch (error) {
    return res.status(400).send(`search error`);
  }
};

module.exports = { userGetWeather };
