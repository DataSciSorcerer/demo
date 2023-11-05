const express = require("express"); // Import Express web framework 导入 Express web 框架
const app = express(); // Create an Express application 创建一个 Express 应用

const { expressjwt: jwt } = require("express-jwt"); // Import JWT middleware 导入 JWT 中间件
const jwtSecret = require("./util/token/index.js"); // Import JWT secret 导入 JWT 密钥

// Use JWT middleware to authenticate and secure routes 使用 JWT 中间件来验证和保护路由
app.use(
  jwt({ secret: jwtSecret.jwtSecret, algorithms: ["HS256"] }).unless({
    path: [
      "/registers/sendVerificationCode", // Allow unauthenticated access to these routes 允许未经身份验证的访问这些路由
      "/registers/verifyRegistrationInformation",
      "/login",
    ],
  })
);

const bodyParser = require("body-parser"); // Import body-parser middleware 导入 body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies 解析 URL 编码的请求体
app.use(bodyParser.json()); // Parse JSON request bodies 解析 JSON 请求体

const routers = require("./routers/index.js"); // Import the application routers 导入应用程序路由
app.use(routers); // Use the routers in the application 使用路由在应用程序中

const cors = require("cors");   // Import CORS middleware 导入 CORS 中间件
app.use(cors()); // Enable CORS for all routes 启用跨域资源共享 (CORS) 以允许所有路由

app.listen(9200, () => {
  console.log("Server running at http://127.0.0.1"); // Start the server and log a message when it's running 启动服务器并在运行时记录一条消息
});

