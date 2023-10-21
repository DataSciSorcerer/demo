// routers.js
const express = require("express");
const routers = express.Router();

const loginHandler = require("./requestHandle/login/index.js");
routers.post("/login", loginHandler);

const registerHandler = require("./requestHandle/register/index.js");
routers.post("/register", registerHandler);

module.exports = routers;
