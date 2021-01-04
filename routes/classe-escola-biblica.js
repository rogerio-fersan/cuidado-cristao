var express = require("express");
var router = express.Router();
const package = require("../package.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    version: package.version,
    appName: package.appName,
    nomeIgreja: package.nomeIgreja,
    enderecoIgreja: package.enderecoIgreja,
    emailIgreja: package.emailIgreja,
    telefoneIgreja: package.telefoneIgreja,
    pastorTitular: package.pastorTitular,
  });
});

module.exports = router;
