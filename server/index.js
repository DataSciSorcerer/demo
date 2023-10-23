const express = require("express");
app = express();

const { expressjwt: jwt } = require("express-jwt");
const jwtSecret = require("./util/token/index.js");
app.use(
  jwt({ secret: jwtSecret.jwtSecret, algorithms: ["HS256"] }).unless(
    {
      path: [
        "/registers/sendVerificationCode",
        "/registers/verifyRegistrationInformation",
        "/login"
      ],
    },
    (error) => {
      if (error) {
        res.send("身份验证失败");
      }
    }
  )
);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routers = require("./routers/index.js");
app.use(routers);

const cors = require("cors");
app.use(cors);

app.listen(80, () => {
  console.log("Server runing at http://127.0.0.1");
});

//query传参数
// app.get("/login", (req, res) => {
//   res.send({
//     hello: "welcome the website!!!" + req.query.name + req.query.age,
//   });
// });

// app.get("/params/:id/:name", (req, res) => {
//     res.send(req.params);
//   });

// app.get("/register", (req, res) => {
//     res.send({
//         welcome: "post succcess!!",
//     });
// });

//托管静态资源
// app.use(express.static("public"))

// app.use("/user",express.static("public"))
