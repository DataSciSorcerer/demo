const Joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const {
  timestampInSeconds,
  getTimeDifference,
} = require("../../../util/time/index");

const schema = Joi.object({
  loginId: Joi.string().trim().email().regex(/^\S*$/).required(),
  password: Joi.string().trim().min(6).max(12).regex(/^\S*$/).required(),
  verificationCode: Joi.number().integer().min(100000).max(999999).required(),
});

const verifyRegistrationInformation = (req, res) => {
  const postData = req.body;
  const { error, value } = schema.validate(postData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const sql = "SELECT id FROM user WHERE id = ?";

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
                return res.send("此ID未发送过验证码");
              } else {
                const timeDifference = getTimeDifference(
                  timestampInSeconds(),
                  userResults[0].date
                );
                if (timeDifference > 600) {
                  return res.send("验证码超时！！！");
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
                        console.log(codeResults[0].verificationCode,postData.verificationCode)
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
                                return res.status(200).send("注册成功！！！");
                              }
                            }
                          );
                        } else {
                          return res
                            .status(400)
                            .json({ error: "验证码错误！！" });
                        }
                      }
                    }
                  );
                }
              }
            }
          });
        } else {
          res.status(400).send("该用户已经注册！！！");
        }
      }
    });
  }
};

module.exports = verifyRegistrationInformation;
