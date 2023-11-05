const Joi = require("joi");
const db = require("../../../util/mysqlServer/index");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../../../util/token/index");
const send = require("../../../util/globalSend/index");

const login = (req, res) => {
  const postData = req.body;
  const schema = Joi.object({
    loginId: Joi.string().trim().email().pattern(/^\S*$/).required(),
    password: Joi.string().trim().min(6).max(12).pattern(/^\S*$/).required(),
  });

  const { error, value } = schema.validate(postData);

  if (error) {
    return res.json(send(19, error.details[0].message));
  } else {
    const sql = "SELECT id, password FROM user WHERE id = ?";
    db.query(sql, value.loginId, (err, results) => {
      if (err) {
        return res.json(send(20, err.message));
      } else {
        if (results.length === 0) {
          return res.json(send(21, "User does not register."));
        } else {
          console.log(results[0].password + "+" + value.password);
          if (results[0].password === value.password) {
            const sql = "SELECT isLogin FROM user WHERE id = ?";

            db.query(sql, value.loginId, (err, results) => {
              if (err) {
                return res.json(send(22, err.message));
              } else {
                console.log();
                if (results[0].isLogin === 0) {
                  const token = jwt.sign(
                    { loginId: value.loginId },
                    jwtSecret.jwtSecret
                  );
                  const updateQuery =
                    "UPDATE user SET isLogin = ? WHERE id = ?";
                  db.query(
                    updateQuery,
                    [1, value.loginId],
                    (updateErr, updateResults) => {
                      if (updateErr) {
                        return res.json(send(23, updateErr));
                      } else {
                        return res.json(
                          send(24, "login successfully", {
                            loginId: value.loginId,
                            token: token,
                          })
                        );
                      }
                    }
                  );
                } else {
                  return res.json(send(25, "User has logged in"));
                }
              }
            });
          } else {
            return res.json(send(26, "Incorrect password."));
          }
        }
      }
    });
  }
};

module.exports = login;
