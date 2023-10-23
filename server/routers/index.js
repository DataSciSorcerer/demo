const express = require("express"); // Import Express web framework 导入 Express web 框架
const routers = express.Router(); // Create a new router 创建一个新的路由

// Import and set up the login request handler 导入并设置登录请求处理程序
const loginHandler = require("./requestHandle/login/index.js");
routers.post("/login", loginHandler); // Define a POST endpoint for login 定义登录的 POST 端点

// Import and set up the sendVerificationCode request handler 导入并设置发送验证码请求处理程序
const sendVerificationCodeHandler = require("./requestHandle/register/sendVerificationCode.js");
routers.post("/registers/sendVerificationCode", sendVerificationCodeHandler); // Define a POST endpoint for sending verification code 定义发送验证码的 POST 端点

// Import and set up the verifyRegistrationInformation request handler 导入并设置验证注册信息请求处理程序
const verifyRegistrationInformationHandler = require("./requestHandle/register/verifyRegistrationInformation.js");
routers.post("/registers/verifyRegistrationInformation", verifyRegistrationInformationHandler); // Define a POST endpoint for verifying registration information 定义验证注册信息的 POST 端点

module.exports = routers; // Export the routers 导出路由
