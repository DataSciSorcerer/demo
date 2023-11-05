const email = require("nodemailer");
const fs = require("fs");
const handlerbars = require("handlebars");
const mjml = require("mjml");

// const email_template = require("./template.html")

// var mailTransport = email.createTransport({
//     host : 'smtp.qq.com',
//     secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
//     auth : {
//         user : '1415640728@qq.com',
//         pass : 'rmfrlazcvmtticcg'
//     },
// });

/* 浏览器输入地址（如127.0.0.1:3000/sned）后即发送 */
// module.exports =  function send_email_to_user(to_user) {
//     var options = {
//         from        : '"Planck" <你的邮箱地址>',
//         to          : '"用户1" <' + to_user + '>, "用户2" <邮箱地址2>',
//         // cc         : ''  //抄送
//         // bcc      : ''    //密送
//         subject        : '一封来自Node Mailer的邮件',
//         text          : '一封来自Node Mailer的邮件',
//         html           : '<h1>你好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>',
//         attachments :
//                     [
//                         {
//                             filename: 'img1.png',            // 改成你的附件名
//                             path: 'public/images/img1.png',  // 改成你的附件路径
//                             cid : '00000001'                 // cid可被邮件使用
//                         },
//                         {
//                             filename: 'img2.png',            // 改成你的附件名
//                             path: 'public/images/img2.png',  // 改成你的附件路径
//                             cid : '00000002'                 // cid可被邮件使用
//                         },
//                     ]
//     };

//     mailTransport.sendMail(options, function(err, msg){
//         if(err){
//             console.log(err);
//             res.render('index', { title: err });
//         }
//         else {
//             console.log(msg);
//             res.render('index', { title: "已接收："+msg.accepted});
//         }
//     });
// };

module.exports = function sendRegisterCode(user, inputCode) {
  const registerTemplate = handlerbars.compile(
    fs.readFileSync(__dirname + "\\templates\\register.mjml", "utf-8")
  );
  const code = {
    verificationCode: inputCode,
  };
  const html = mjml(registerTemplate(code)).html;

  let transporter = email.createTransport({
    service: user, // 发给QQ邮箱
    port: "smtp.qq.com", // 发邮箱的端口号
    secureConnection: true, // 使用SSL加密传输
    auth: {
      // 权限认证
      user: "1415640728@qq.com",
      pass: "rygtidykzqmdhiji",
    },
  });

  let mailOptions = {
    from: "1415640728@qq.com", // 发邮件的账号
    to: user, // 收邮件的账号
    subject: "欢迎注册！！！", // 标题
    html: html, // 邮寄的内容
  };

  transporter.sendMail(mailOptions, (err) => {
    if (!err) {
      console.log("邮件已经发送完成");
    } else {
      console.log(err.response);
    }
  });
};
