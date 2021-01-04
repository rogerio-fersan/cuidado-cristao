const conn = require("../database/connection/connect").conn;
const schema = require("../database/schema/schemas");

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // nome
  let User = conn.model("User", schema.User); //new Schema("User", schema.User);
  User.findOne({
    nome: req.body.nome,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "O Nome informado já está em uso!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "O E-mail informado já está em uso" });
        return;
      }
      next();
    });
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
