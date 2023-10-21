const joi = require("joi");
const sendRegisterCode = require("../../../util/mailServer/index");

const register = (req, res) => {
  const postData = req.body;
  const schema = joi.object({
    loginId: joi.string().trim().email().regex(/^\S*$/).required(),
    password: joi.string().trim().min(6).max(12).regex(/^\S*$/).required(),
  });

  const { error, value } = schema.validate(postData);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  } else {
    const randomCode = () => {
      let code = "";
      for (i = 0; i < 6; i++) {
        code += Math.floor(Math.random() * 10);
      }
      return code;
    };
    sendRegisterCode(postData.loginId, randomCode());
  }
};

module.exports = register;
