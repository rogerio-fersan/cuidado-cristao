const { db } = require("../database/connection/connect").conn;
const { User } = require("../database/schema/schemas").User;
require("dotenv-safe");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    nome: req.body.nome,
    email: req.body.email,
    senha: bcrypt.hashSync(req.body.senha, 8),
    perfil: "USER",
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "User was registered successfully!" });
  });
};

exports.signin = (req, res) => {
  User.findOne({
    nome: req.body.nome,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    var senhaIsValid = bcrypt.compareSync(req.body.senha, user.senha);

    if (!senhaIsValid) {
      return res.status(401).send({
        validationToken: null,
        message: "Invalid senha!",
      });
    }

    var token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      nome: user.nome,
      email: user.email,
      perfil: user.perfil,
      validationToken: token,
    });
  });
};
