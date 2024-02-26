
const express = require('express');
const cors = require("cors");
const PORT = process.env.PORT || 5001;
const nodemailer = require('nodemailer');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(express.static('../backend/dist'))

const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "sallysegui10@gmail.com",
      pass: "vead myct ugfj iitb",
    },
    tls: {
      rejectUnauthorized: false
    }
  });


  app.post('/sendEmail', (req, res) => {
    const { name, email, message} = req.body;
  
    // Email content
    const mailOptions = {
      from: '"AMX Support" <foo@example.com>', // sender address
      to: "sallysegui10@gmail.com", // list of receivers
      subject: "Hello from AMX support", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
     // text:'test email'
    };

    // const mailOptionsReply = {
    //   from: '"AMX Support" <foo@example.com>', // sender address
    //   to: "sallysegui10@gmail.com", // list of receivers
    //   subject: "Hello from AMX support", // Subject line
    //   //text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    //   text: automaticResponse
    // };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
      }
    });

    // transporter.sendMail(mailOptionsReply, (error, info) => {
    //   if (error) {
    //     console.error('Error sending email:', error);
    //     res.status(500).send('Error sending email');
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //     res.status(200).send('Email sent successfully');
    //   }
    // });


  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
