const { sendMail } = require("../services/mailer");


  module.exports.mail_post = (req, res) => {
    let {from,to,subject,html} = req.body;
    sendMail(from,to,subject,html)
    .then(resp=> {

        res.json({status:true, msg: "email sent",obj:{from,to,subject,html} });
    })
    .catch(err=> {
        res.json({status:false, msg: "Unable to send mail",err})
    })
  };
  
  