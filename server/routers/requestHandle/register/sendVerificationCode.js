const Joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const sendRegisterCode = require("../../../util/mailServer/index");
const {
  timestampInSeconds,
  getTimeDifference,
} = require("../../../util/time/index");

// 验证请求数据的 Joi schema
const schema = Joi.object({
  loginId: Joi.string().trim().email().regex(/^\S*$/).required(),
});

const sendVerificationCode = (req, res) => {
  const postData = req.body;

  // 验证请求数据
  const { error, value } = schema.validate(postData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const userId = value.loginId;

  // 查询用户是否已注册
  const userQuery = "SELECT id FROM user WHERE id = ?";
  db.query(userQuery, userId, (userErr, userResults) => {
    if (userErr) {
      return handleDatabaseError(res, userErr);
    }

    if (userResults.length > 0) {
      return res.send(`${userId} 已经注册！！！`);
    }

    // 查询验证码发送历史
    const historyQuery =
      "SELECT date FROM verificationCodeSendHistory WHERE id = ?";
    db.query(historyQuery, userId, (historyErr, historyResults) => {
      if (historyErr) {
        return handleDatabaseError(res, historyErr);
      }

      if (historyResults.length === 0) {
        // 生成随机验证码
        const randomCode = generateRandomCode();
        // 发送验证码邮件
        sendRegisterCode(userId, randomCode);
        // 插入验证码发送历史记录
        const insertQuery =
          "INSERT INTO verificationCodeSendHistory (id, verificationCode, date) VALUES (?, ?, ?)";
        db.query(
          insertQuery,
          [userId, randomCode, timestampInSeconds()],
          (insertErr, insertResults) => {
            if (insertErr) {
              return handleDatabaseError(res, insertErr);
            }
            return sendSuccessResponse(res, userId);
          }
        );
      } else {
        // 计算时间间隔
        const timeDifference = getTimeDifference(
          historyResults[0].date,
          timestampInSeconds()
        );
        console.log(timeDifference);
        if (timeDifference > 60) {
          // 生成新验证码
          const randomCode = generateRandomCode();
          // 发送验证码邮件
          sendRegisterCode(userId, randomCode);
          // 更新验证码发送历史记录
          const updateQuery =
            "UPDATE verificationCodeSendHistory SET date = ?, verificationCode = ? WHERE id = ?";
          db.query(
            updateQuery,
            [timestampInSeconds(), randomCode, userId],
            (updateErr, updateResults) => {
              if (updateErr) {
                return handleDatabaseError(res, updateErr);
              }
              return sendSuccessResponse(res, userId);
            }
          );
        } else {
          return res.status(429).send("请求频繁！！！");
        }
      }
    });
  });
};

// 生成随机验证码
const generateRandomCode = () => {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};

// 处理数据库错误
const handleDatabaseError = (res, error) => {
  res.status(400).send("dataErr:" + error.message);
};

// 发送成功响应
const sendSuccessResponse = (res, userId) => {
  res.json({
    id: userId,
    发送验证码邮件: "OK",
    记录验证码信息: "OK",
  });
};

module.exports = sendVerificationCode;
