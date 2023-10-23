const Joi = require("joi"); // Import Joi 用于请求数据验证
const db = require("../../../util/mysqlServer/index"); // Import the database module 导入数据库模块
const sendRegisterCode = require("../../../util/mailServer/index"); // Import the email sending module 导入邮件发送模块
const { timestampInSeconds, getTimeDifference } = require("../../../util/time/index"); // Import time-related utilities 导入与时间有关的工具

/**
 * Joi schema for request data validation
 * 用于验证请求数据的 Joi 模式
 */
const schema = Joi.object({
  loginId: Joi.string().trim().email().pattern(/^\S*$/).required(),
});

/**
 * Sends a verification code based on the request data.
 * 根据请求数据发送验证码
 *
 * @param {Object} req - The HTTP request object HTTP 请求对象
 * @param {Object} res - The HTTP response object HTTP 响应对象
 */
const sendVerificationCode = (req, res) => {
  const { loginId } = req.body;

  // Validate the request data using the Joi schema 使用 Joi 模式验证请求数据
  const { error } = schema.validate({ loginId });

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Check if the user is already registered 检查用户是否已注册
  const userQuery = "SELECT id FROM user WHERE id = ?";
  db.query(userQuery, loginId, (userErr, userResults) => {
    if (userErr) {
      return handleDatabaseError(res, userErr);
    }

    if (userResults.length > 0) {
      return res.send(`${loginId} has already been registered.`);
    }

    // Check verification code send history 检查验证码发送历史记录
    const historyQuery = "SELECT date FROM verificationCodeSendHistory WHERE id = ?";
    db.query(historyQuery, loginId, (historyErr, historyResults) => {
      if (historyErr) {
        return handleDatabaseError(res, historyErr);
      }

      if (historyResults.length === 0) {
        const randomCode = generateRandomCode();
        sendRegisterCode(loginId, randomCode);

        // Insert verification code send history record 插入验证码发送历史记录
        const insertQuery = "INSERT INTO verificationCodeSendHistory (id, verificationCode, date) VALUES (?, ?, ?)";
        db.query(insertQuery, [loginId, randomCode, timestampInSeconds()], (insertErr, insertResults) => {
          if (insertErr) {
            return handleDatabaseError(res, insertErr);
          }
          return sendSuccessResponse(res, loginId);
        });
      } else {
        const timeDifference = getTimeDifference(historyResults[0].date, timestampInSeconds());

        if (timeDifference > 60) {
          const randomCode = generateRandomCode();
          sendRegisterCode(loginId, randomCode);

          // Update verification code send history record 更新验证码发送历史记录
          const updateQuery = "UPDATE verificationCodeSendHistory SET date = ?, verificationCode = ? WHERE id = ?";
          db.query(updateQuery, [timestampInSeconds(), randomCode, loginId], (updateErr, updateResults) => {
            if (updateErr) {
              return handleDatabaseError(res, updateErr);
            }
            return sendSuccessResponse(res, loginId);
          });
        } else {
          return res.status(429).send("Request is too frequent.");
        }
      }
    });
  });
};

/**
 * Generates a random verification code.
 * 生成随机验证码
 *
 * @returns {string} The generated verification code 生成的验证码
 */
const generateRandomCode = () => {
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
};

/**
 * Handles database errors.
 * 处理数据库错误
 *
 * @param {Object} res - The HTTP response object HTTP 响应对象
 * @param {Error} error - The database error 数据库错误
 */
const handleDatabaseError = (res, error) => {
  res.status(400).send("Database Error: " + error.message);
};

/**
 * Sends a success response with user and verification information.
 * 发送成功响应，包含用户和验证码信息
 *
 * @param {Object} res - The HTTP response object HTTP 响应对象
 * @param {string} loginId - The user's login ID 用户的登录 ID
 */
const sendSuccessResponse = (res, loginId) => {
  res.json({
    id: loginId,
    SendVerificationEmail: "OK",
    RecordVerificationInfo: "OK",
  });
};

// Export the main function for sending verification codes 导出用于发送验证码的主要函数
module.exports = sendVerificationCode;
