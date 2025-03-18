const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const helmet = require('helmet');
const mail_route = require("../routes/mail");
const { PORT } = process.env;
const path = require('path')

const origin = ["http://","https://"]; 

// middleware

app.use(cors({ credentials: true, origin: origin })); // allow commuication with FE
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" })); // allow form fields
app.use(bodyParser.json({ limit: "50mb" })); // allow json fields
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, 'client')))
app.set("views", path.join(__dirname, "../views"));
app.set('view engine', 'ejs');
app.use("/api/sendMail", [mail_route]);


//error routes
app.get("/", (req, res) => {
  res.render('index',{
    date: new Date().getFullYear()
  });
});
app.get("*", (req, res) => {
  res.json({ err: "Invalid route" });
});
app.post("*", (req, res) => {
  res.json({ err: "Invalid route" });
});
app.delete("*", (req, res) => {
  res.json({ err: "Invalid route" });
});
app.patch("*", (req, res) => {
  res.json({ err: "Invalid route" });
});

//start server
app.listen(PORT || 5000, () => {
  console.log(`Listening to request on port ${PORT}`);
});

