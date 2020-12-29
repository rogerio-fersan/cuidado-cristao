/* ./connection/connect.js */
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv-safe").config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.log(">>>" + e);
  });
var conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  logger.bind("Connected! Just keep going to...");
  console.log(`Keep working! `);
});

module.exports = { conn };
