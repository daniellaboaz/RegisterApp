const { userHelloWorld } = require("../controller/userController");

const router = require("express").Router();

router.get("/helloWorld", userHelloWorld);
module.exports = router;
