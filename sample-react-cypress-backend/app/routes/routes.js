module.exports = app => {
  const controller = require("../controllers/controller.js");

  var router = require("express").Router();

  router.get("/zip", controller.findzip);

  app.use("/api", router);
};
