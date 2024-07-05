// const bcryptjs = require("bcryptjs");
// const encryptPw = (text) => bcryptjs.hashSync(text);

// const hashPw = encryptPw("password");
// console.log(hashPw);
// -----------------------------------------------
//iiyl vhlw vtit nxel
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PW,
  },
});

transporter.verify((err) => {
  if (err) {
    console.log(err);
  }
  console.log("email is working");
});
const sendEmail = async ({ email, subject, message, attachments }) => {
  const info = await transporter.sendMail({
    from: `"SUMIP CHAUDHARY" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: message,
    attachments,
  });

  return info;
};
const message = "<div>Happy new year</div><img src ='cid:sumip'>";
const attachments = [
  {
    path: "./image.png",
    filename: "image.png",
    cid: "sumip",
  },
];

sendEmail({
  email: "sumipgt3@gmail.com",
  subject: "Hello",
  message,
  attachments,
});
