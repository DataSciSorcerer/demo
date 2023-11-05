const Joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const sendRegisterCode = require("../../../util/mailServer/index");
const send = require("../../../util/globalSend/index");

const {
  timestampInSeconds,
  getTimeDifference,
} = require("../../../util/time/index");

const schema = Joi.object({
  loginId: Joi.string().trim().email().pattern(/^\S*$/).required(),
});

const sendVerificationCode = (req, res) => {
  const { loginId } = req.body;

  const { error } = schema.validate({ loginId });

  // 数据验证
  if (error) {
    return res.json(send(0, error.details[0].message));
  }
  // 判断是否注册
  const userQuery = "SELECT id FROM user WHERE id = ?";
  db.query(userQuery, [loginId], (userErr, userResults) => {
    if (userErr) {
      return res.json(send(1, userErr.message));
    }
    // 已注册
    if (userResults.length > 0) {
      return res.json(send(2, `${loginId} has already been registered.`));
    }
    // 判断是否发送过验证码
    const historyQuery =
      "SELECT date FROM verificationCodeSendHistory WHERE id = ?";
    db.query(historyQuery, [loginId], (historyErr, historyResults) => {
      if (historyErr) {
        return res.json(send(3, historyErr.message));
      }
      // 没有发送过验证码，直接发送验证码
      if (historyResults.length === 0) {
        const randomCode = generateRandomCode();
        sendRegisterCode(loginId, randomCode);

        const insertQuery =
          "INSERT INTO verificationCodeSendHistory (id, verificationCode, date) VALUES (?, ?, ?)";
        db.query(
          insertQuery,
          [loginId, randomCode, timestampInSeconds()],
          (insertErr) => {
            if (insertErr) {
              return res.json(send(4, insertErr.message));
            }
            return res.json(
              send(5, "Record verification code sent successfully")
            );
          }
        );
      } else {
        // 发送过验证码，判断发送间隔是否大于60s
        const timeDifference = getTimeDifference(
          historyResults[0].date,
          timestampInSeconds()
        );
        // 大于60s，直接发送验证码
        if (timeDifference > 60) {
          const randomCode = generateRandomCode();
          sendRegisterCode(loginId, randomCode);

          const updateQuery =
            "UPDATE verificationCodeSendHistory SET date = ?, verificationCode = ? WHERE id = ?";
          db.query(
            updateQuery,
            [timestampInSeconds(), randomCode, loginId],
            (updateErr, updateResults) => {
              if (updateErr) {
                return res.json(send(6, updateErr));
              }
              return res.json(send(7, "Verification code sent successfully"));
            }
          );
        } else {
          // 小于60s，提示发送验证码频繁
          return res.json(send(8, "Request verification code is too frequent"));
        }
      }
    });
  });
};

const generateRandomCode = () => {
  const charset =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }
  return code;
};

module.exports = sendVerificationCode;
