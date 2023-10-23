const Joi = require("joi"); // Import Joi 用于请求数据验证
const db = require("../../../util/mysqlServer/index"); // Import the database module 导入数据库模块
const {
  timestampInSeconds,
  getTimeDifference,
} = require("../../../util/time/index"); // Import time-related utilities 导入与时间有关的工具

/**
 * Joi schema for request data validation
 * 用于验证请求数据的 Joi 模式
 */
const schema = Joi.object({
  loginId: Joi.string().trim().email().pattern(/^\S*$/).required(),
  password: Joi.string().trim().min(6).max(12).pattern(/^\S*$/).required(),
  verificationCode: Joi.number().integer().min(100000).max(999999).required(),
});

/**
 * Verifies user registration information and handles the registration process.
 * 验证用户注册信息并处理注册流程
 *
 * @param {Object} req - The HTTP request object HTTP 请求对象
 * @param {Object} res - The HTTP response object HTTP 响应对象
 */
const verifyRegistrationInformation = (req, res) => {
  const postData = req.body;
  const { error, value } = schema.validate(postData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const sql = "SELECT id FROM user WHERE id =";

    db.query(sql, postData.loginId, (err, results) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      } else {
        if (results.length === 0) {
          const userQuery =
            "SELECT id, date FROM verificationCodeSendHistory WHERE id = ?";
          db.query(userQuery, postData.loginId, (userErr, userResults) => {
            if (userErr) {
              return res.status(400).json({ error: userErr.message });
            } else {
              if (userResults.length === 0) {
                return res.send(
                  "This ID has not sent a verification code yet. 此ID未发送过验证码"
                );
              } else {
                const timeDifference = getTimeDifference(
                  timestampInSeconds(),
                  userResults[0].date
                );

                if (timeDifference > 600) {
                  return res.send(
                    "Verification code has timed out. 验证码超时！！！"
                  );
                } else {
                  const codeQuery =
                    "SELECT verificationCode FROM verificationCodeSendHistory WHERE id = ?";
                  db.query(
                    codeQuery,
                    [postData.loginId],
                    (codeErr, codeResults) => {
                      if (codeErr) {
                        return res.status(400).json({ error: codeErr.message });
                      } else {
                        console.log(
                          codeResults[0].verificationCode,
                          postData.verificationCode
                        );
                        if (
                          codeResults[0].verificationCode ===
                          value.verificationCode
                        ) {
                          const insertQuery =
                            "INSERT INTO user (id, password, isLogin) VALUES (?, ?, ?)";
                          db.query(
                            insertQuery,
                            [postData.loginId, postData.password, false],
                            (insertErr, insertResults) => {
                              if (insertErr) {
                                return res
                                  .status(400)
                                  .json({ error: insertErr.message });
                              } else {
                                return res
                                  .status(200)
                                  .send(
                                    "Registration successful. 注册成功！！！"
                                  );
                              }
                            }
                          );
                        } else {
                          return res
                            .status(400)
                            .json({
                              error:
                                "Incorrect verification code. 验证码错误！！",
                            });
                        }
                      }
                    }
                  );
                }
              }
            }
          });
        } else {
          res
            .status(400)
            .send("The user has already been registered. 该用户已经注册！！！");
        }
      }
    });
  }
};

// Export the function for verifying registration information 导出用于验证注册信息的函数
module.exports = verifyRegistrationInformation;
