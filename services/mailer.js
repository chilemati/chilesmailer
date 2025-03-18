const nodemailer = require('nodemailer');
const dotenv = require("dotenv").config();
const { MAILER_PASSWORD,MAILER_USER } = process.env;


// Create a transporter object using Gmail SMTP
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: MAILER_USER,
    pass: MAILER_PASSWORD
  }
});

// console.log(MAILER_PASSWORD,MAILER_USER);

module.exports.sendMail = (from,to,subject,html)=> new Promise( async function(accept,reject){
  let d6=Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  var mailOptions = {
    from: `"Chile's Mailer 👻" <${from}>`,
    to: to,
    subject: subject,
    html: html
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      reject({status: false, error})
    } else {
      accept({status: true, info,code:d6})
    }
  });
})