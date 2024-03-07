const userHelloWorld = (req, res) => {
  res.status(200).send(`hello from ${req.route.path}`);
};

module.exports = { userHelloWorld };
