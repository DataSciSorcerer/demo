// routers.js
const express = require("express");
const routers = express.Router();

const loginHandler = require("./requestHandle/login/index.js");
routers.post("/login", loginHandler);

module.exports = routers;

