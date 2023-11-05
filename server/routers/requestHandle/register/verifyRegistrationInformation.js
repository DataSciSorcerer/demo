const Joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const {
  timestampInSeconds,
  getTimeDifference,
} = require("../../../util/time/index");
const send = require("../../../util/globalSend/index");

const schema = Joi.object({
  loginId: Joi.string().trim().email().pattern(/^\S*$/).required(),
  password: Joi.string().trim().min(6).max(12).pattern(/^\S*$/).required(),
  verificationCode: Joi.string()
    .regex(/^[0-9a-zA-Z]{6}$/)
    .required(),
});

const verifyRegistrationInformation = (req, res) => {
  const postData = req.body;
  const { error, value } = schema.validate(postData);

  if (error) {
    return res.json(send(9, error.details[0].message));
  }

  const userQuery = "SELECT id FROM user WHERE id = ?";

  db.query(userQuery, postData.loginId, (err, results) => {
    if (err) {
      return res.json(send(10, err.message));
    }

    if (results.length === 0) {
      const userQuery =
        "SELECT id, date FROM verificationCodeSendHistory WHERE id = ?";
      db.query(userQuery, postData.loginId, (err, userResults) => {
        if (err) {
          return res.json(send(11, err.message));
        }

        if (userResults.length === 0) {
          return res.json(
            send(12, "This ID has not sent a verification code yet.")
          );
        }

        const timeDifference = getTimeDifference(
          timestampInSeconds(),
          userResults[0].date
        );

        if (timeDifference > 600) {
          return res.json(send(13, "Verification code has timed out."));
        }

        const codeQuery =
          "SELECT verificationCode FROM verificationCodeSendHistory WHERE id = ?";
        db.query(codeQuery, [postData.loginId], (err, codeResults) => {
          if (err) {
            return res.json(send(14, err.message));
          }

          if (codeResults[0].verificationCode === value.verificationCode) {
            const insertQuery =
              "INSERT INTO user (id, password, isLogin) VALUES (?, ?, ?)";
            db.query(
              insertQuery,
              [postData.loginId, postData.password, false],
              (insertErr, insertResults) => {
                if (insertErr) {
                  return res.json(send(15, insertErr.message));
                } else {
                  return res.json(
                    send(16, "Registration successful. 注册成功！！！")
                  );
                }
              }
            );
          } else {
            return res.json(send(17, "Incorrect verification code."));
          }
        });
      });
    } else {
      return res.json(send(18, "The user has already been registered."));
    }
  });
};

module.exports = verifyRegistrationInformation;
