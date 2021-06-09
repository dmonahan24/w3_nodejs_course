var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR EMAIL',
    pass: 'YOUR PASSWORD'
  }
});

var mailOptions = {
  from: 'YOUR EMAIL',
  to: 'RECIPIENTS EMAIL',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});