// routers.js
const express = require("express");
const routers = express.Router();

const loginHandler = require("./requestHandle/login/index.js");
routers.post("/login", loginHandler);

const sendVerificationCodeHandler = require("./requestHandle/register/sendVerificationCode.js");
routers.post("/registers/sendVerificationCode", sendVerificationCodeHandler);
const verifyRegistrationInformationHandler = require("./requestHandle/register/verifyRegistrationInformation.js");
routers.post("/registers/verifyRegistrationInformation", verifyRegistrationInformationHandler);

module.exports = routers;
