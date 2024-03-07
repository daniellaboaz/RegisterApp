const express = require("express");
const app = express();
require("dotenv/config");

const isProduction = `${process.env.IS_PRODUCTION}`.toLowerCase() === "true";
const port = process.env.PORT;

const pageNotFound404 = require("./src/utils/pageNotFound404");

//middlewares
app.use(express.json()); //json parser middleware
//add REST api headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization,Checksum, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  // console.log(req.originalUrl)
  next();
});

//   routes
const userRouter = require("./src/routes/user");
app.use("/api/user/", userRouter);

const weatherRouter = require("./src/routes/weather");
app.use("/api/weather/", weatherRouter);

//The 404 Route (ALWAYS Keep this as the last route)
app.get("*", function (req, res) {
  res.status(404).send(pageNotFound404);
});

app.listen(port, () => {
  console.log(`server is listening to ${port}`);
});
