var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let helmet = require("helmet");
let cors = require("cors");

var indexRouter = require("./routes/index");
let infoRouter = require("./routes/info");
let authRouter = require("./routes/auth");
let userRouter = require("./routes/users");

var app = express();
require("dotenv-safe").config();
let origin = process.env.ORIGIN_URL; //--info: http://127.0.0.1:4200 (ng serve port)
app.use(
  cors([
    {
      origin: origin,
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    },
    {
      origin: "https://connect.facebook.net",
      optionsSuccessStatus: 200,
    },
  ])
);
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// App routes
app.use("/api/auth", authRouter);
app.use("/api/info", infoRouter);
app.use("/api/users", userRouter);
app.use("/api/", indexRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
