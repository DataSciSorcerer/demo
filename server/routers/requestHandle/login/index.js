// login.js
const joi = require("joi")

const login = (req, res) => {
    const postData = req.body;
   
    res.send(postData);
  };
  
module.exports = login;
  