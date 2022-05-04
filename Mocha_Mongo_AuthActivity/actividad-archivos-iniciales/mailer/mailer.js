const nodemailer = require("nodemailer");

const mailConfig = {
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "maya.hammes69@ethereal.email",
    pass: "UdMyuHF4ngKzk6QbHX",
  },
};

module.exports = nodemailer.createTransport(mailConfig);
