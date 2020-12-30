var express = require("express");
const schemas = require("../schema/schemas");
const connection = require("../connection/connect");
const { ObjectId } = require("mongodb");
const { disconnect } = require("mongoose");
const { ObjectID } = require("mongodb");
var router = express.Router();

//https://mongoosejs.com/docs/queries.html

router.get("/list", (req, res, next) => {
  const Canal = connection.conn.model("Canal", schemas.Canal);
  Canal.find((err, docs) => {
    if (err) {
      console.log(err);
      res.send(500).json(err);
    } else {
      res.json(docs);
    }
  });
});

router.get("/{:id}", (req, res, next) => {
  const Canal = connection.conn.model("Canal", schemas.Canal);
  let id = req.params.id;
  Canal.find({ _id: ObjectId(id) }, (err, docs) => {
    if (err) {
      console.log(err);
      res.send(500).json(err);
    } else {
      res.json(docs);
    }
  });
});

router.post("/", (req, res, next) => {
  const Canal = connection.conn.model("Canal", schemas.Canal);
  let canal = new Canal();
  canal = req.body;
  canal.save((err, doc) => {
    if (err) {
      console.log(err);
      res.send(500).json(err);
    } else {
      res.json(doc);
    }
  });
});

router.put("/", (req, res, next) => {
  const Canal = connection.conn.model("Canal", schemas.Canal);
  let canal = new Canal();
  canal = req.body;
  canal.findOneAndUpdate(req.params._id, (err, doc) => {
    if (err) {
      console.log(err);
      res.send(500).json(err);
    } else {
      res.json(doc);
    }
  });
});

router.delete("/{:id}", (req, res, next) => {
  const Canal = connection.conn.model("Canal", schemas.Canal);
  Canal.deleteOne({ _id: ObjectID(req.params._id) }, (err, doc) => {
    if (err) {
      console.log(err);
      res.send(500).json(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
