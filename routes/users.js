const userController = require("../back-end/controller/user-controller");
var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Nothing to do");
});

router.get("/count", (req, res, next) => {
  userController.count();
});
