const express = require("express");
const bodyParser = require("body-parser");
const keys = require("./keys");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(e => {
    console.log(e);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
