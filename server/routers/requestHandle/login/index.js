const joi = require("joi"); // Import Joi for request data validation 导入 Joi 用于请求数据验证
const db = require("../../../util/mysqlServer/index"); // Import the database module 导入数据库模块
const jwt = require("jsonwebtoken"); // Import the JWT library 导入 JWT 库
const jwtSecret = require("../../../util/token/index"); // Import the JWT secret 导入 JWT 密钥

/**
 * Handles user login and authentication.
 * 处理用户登录和身份验证
 *
 * @param {Object} req - The HTTP request object HTTP 请求对象
 * @param {Object} res - The HTTP response object HTTP 响应对象
 */
const login = (req, res) => {
  const postData = req.body;
  const schema = joi.object({
    loginId: joi.string().trim().email().pattern(/^\S*$/).required(),
    password: joi.string().trim().min(6).max(12).pattern(/^\S*$/).required(),
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
          res.send("User does not exist. 用户不存在！！！");
        } else {
          const userQuery = "SELECT password FROM user WHERE id = ?";

          db.query(userQuery, value.loginId, (err, results) => {
            if (err) {
              return res.status(400).json({ error: error.details[0].message });
            } else {
              if (results[0].password != value.password) {
                res.send("Incorrect password. 密码错误！！！");
              } else {
                const token = jwt.sign(value.loginId, jwtSecret.jwtSecret);
                res.json({ loginStatus: "OK " + value.loginId, token: token });
              }
            }
          });
        }
      }
    });
  }
};

module.exports = login; // Export the login function 导出登录函数
