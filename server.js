const express = require("express");
const mailSender = require("./mailer");
const app = express();
app.use(express.json());
mailSender({email : "somuthegreat15@gmail.com" , name :"Somesh",class:"7Th sem"});



app.listen('8000',()=>{console.log("server Listening at port 3000 ")});
