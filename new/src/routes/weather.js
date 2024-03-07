const { userGetWeather } = require("../controller/weatherController");

const router = require("express").Router();

router.get("/:location", userGetWeather);
module.exports = router;
