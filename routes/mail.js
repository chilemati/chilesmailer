const express = require("express");
const { validateMail } = require("../validator/mail");
const { mail_post } = require("../controllers/mail");

const mail_route = express.Router();

mail_route.post("/email",validateMail, mail_post);


module.exports = mail_route;
