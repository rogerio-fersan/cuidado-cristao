const conn = require("../database/connection/connect").conn;
const schema = require("../database/schema/schemas");

exports.count = (req, res) => {
  const User = conn.model("User", schema.User);
  User.count().exec((err, result) => {
    if (err) {
      res.send(405);
    }
    res.status(200).send(result);
  });
};
