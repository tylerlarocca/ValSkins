const express = require("express");
const app = express();
const skins = require("./data/skins-data")

const sayHello = (req, res, next) => {
    res.send(skins);
  };

app.use(sayHello);

module.exports = app;