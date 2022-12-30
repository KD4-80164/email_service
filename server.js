const express = require("express");
const mailSender = require("./mailer");
const app = express();
app.use(express.json());
mailSender({
  email: "jarvisstark1011@gmail.com",
  name: "Somesh",
  company: "Zomato",
  position: "Frontend Developer ",
  link: "www.anonymouscompany",
  job_description:" as a full time developer at our company.",
  location:"remote"
});



app.listen('8000',()=>{console.log("server Listening at port 3000 ")});
