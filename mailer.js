const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
var transporter = require('nodemailer-smtp-transport');
const nodemailer = require("nodemailer");
const secret = require("./server");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname,'/','data.html');
console.log(filePath);

var readHTMLFile = function(path, callback) {
  fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
      if (err) {
         callback(err);                 
      }
      else {
          callback(null, html);
      }
  });
};

console.log("ran 1 time");


async function mailSender(email) {

  const htmlData = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <title>${email.name}</title>
    <link rel="stylesheet" href="index1.css" />
  </head>
  <body style="border: .0625rem solid rgb(234, 231, 231);
  box-sizing: border-box;
  box-shadow: .1875rem .375rem .375rem rgba(0,0,0,0.1);
  border-radius: .625rem;
  padding: 2rem;
  background: #D0D8DB;
    padding-top: 60px;
    padding-bottom: 40px;">
    <div style=" padding: 0.6rem;
    border-radius: 7px;
    background: linear-gradient(#b0dbf6, #E2ebf0);" class="cont">
    <div style=" box-shadow: 1px 2px 4px rgba(0,0,0,0.1);
    padding: 0.4rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(217, 244, 244);
" class="hdr"><img class = "clg-logo" src="GECLogoFinal.png" alt="clg-img"/><div style="font-size: 1.3rem;
font-weight: 600;" class="opp-text">Opportuity from Gec Raipur</div></div>
    <p style="text-align: left" class="name">Dear ${email.name},</p>
    
    <p class="firts-para"> 
      We would like to present to you a new job opportunity at 
      ${email.company}. We think you may find it interesting.
    </p>
    <p class="second-para">
       ${email.company} have a job opening for ${email.position}, and according to your skills and experience, I think you may be a good fit. 
    </p>
    <p> As a ${email.position}, you would be hired ${email.job_description} It will be fully ${email.location}
    If you are interested to learn more about this opportunity, please check it out on our career site ${email.link}.</p>
    <p id="demo">Best Wishes,<br>  </p>
    <footer>
        <div class="rounded-social-buttons">
                          cfc@gmail.com
                          
                      </div>
      </footer>
    </div>
    <script defer src=${"https://use.fontawesome.com/releases/v5.0.13/js/all.js"} integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous">


</script>


  </body>
</html>
  `


  // const htmlData = fs.readFileSync(filePath,{encoding:"utf-8"},function(err,html){
  //   if (err)
  //   {
  //     console.log("error in reading html using fs ");
  //   }
  //   else 
  //   {
  //     console.log("Successfully read the html file using fs");
  //   }
  // })



  let transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    auth: {
      user:"abhinav619000@gmail.com" , 
      pass: "pwjehcdpsbctsjmt", 
    },
  });
  const a = __dirname + '/'+'data.html';
  readHTMLFile(__dirname + '/'+'data.html', function(err, html) {
    console.log(a);
    if (err) {
       console.log('error reading file', err);
       return;
    }
    var template = Handlebars.compile(html);
    var replacements = {
         username: "John Doe"
    };
    var htmlToSend = template(replacements);
    var mailOptions = {
        from: 'someshb112@email.com',
        to : 'somuthegreat15@email.com',
        subject : 'test subject',
        html : htmlToSend
     };
    transporter.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        }
    });
});
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Code for Community 👻" <foo@example.com>', // sender address
    to: email.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: htmlData, // html body
    attachments:[
      {
        filename:"gears_image",
        path: __dirname+"/image.jpg",
        cid : "Baird"
      }
    ]
  });

  console.log("Message sent: %s", info.messageId);

  
 
}



module.exports = mailSender;