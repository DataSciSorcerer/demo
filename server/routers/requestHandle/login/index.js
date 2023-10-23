// login.js
const joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../../util/token/index");

const login = (req, res) => {
  const postData = req.body;
  const schema = joi.object({
    loginId: joi.string().trim().email().regex(/^\S*$/).required(),
    password: joi.string().trim().min(6).max(12).regex(/^\S*$/).required(),
  });

  const { error, value } = schema.validate(postData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const sql = "SELECT id FROM user WHERE id = ?";

    db.query(sql, value.loginId, (err, results) => {
      if (err) {
        return res.status(400).json({ error: error.details[0].message });
      } else {
        if (results.length === 0) {
          res.send("用户不存在！！！");
        } else {
          const userQuery = "SELECT password FROM user WHERE id = ?";

          db.query(userQuery, value.loginId, (err, results) => {
            if (err) {
              return res.status(400).json({ error: error.details[0].message });
            } else {
              if (results[0].password != value.password) {
                res.send("密码错误！！！");
              } else {
                const token = jwt.sign(value.loginId, jwtSecret.jwtSecret);
                res.json({ loginStatus: "OK" + value.loginId, token: token });
              }
            }
          });
        }
      }
    });
  }
};

module.exports = login;
