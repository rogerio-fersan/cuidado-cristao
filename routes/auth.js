var express = require("express");
const verifySignUp = require("../back-end/middleware/verifica-signup");
const controller = require("../back-end/controller/auth-controller");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Access forbiden" });
});

router.post("/signup", (req, res, next) => {
  verifySignUp.checkDuplicateUsernameOrEmail(req, res, next);
  controller.signup(req, res);
});

router.post("/signin", (req, res, next) => controller.signin(req, res));

module.exports = router;
