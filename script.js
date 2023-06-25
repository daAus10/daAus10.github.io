const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;
  
    // Configure the email transport
    const transporter = nodemailer.createTransport({
      // Specify your email service provider and authentication details
      service: "Gmail",
      auth: {
        user: "austinazhr0@gmail.com",
        pass: "Aspiretwenty"
      }
    });
  
    // Compose the email
    const mailOptions = {
      from: email,
      to: "austinazhr0@gmail.com",
      subject: "New message from portfolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error:", error);
        res.json({ success: false });
      } else {
        console.log("Email sent:", info.response);
        res.json({ success: true });
      }
    }); // <-- Add closing parenthesis and semicolon here
  });
  