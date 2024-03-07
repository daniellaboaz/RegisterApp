const weather = require("weather-js");

const findWeather = (search) => {
  return new Promise((resolve, reject) => {
    weather.find({ search, degreeType: "C" }, function (err, result) {
      if (err) return reject(err);

      return resolve(result, null, 2);
    });
  });
};

module.exports = { findWeather };
