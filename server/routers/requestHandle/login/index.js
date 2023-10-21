// login.js
const joi = require("joi");

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
  }
};

module.exports = login;
