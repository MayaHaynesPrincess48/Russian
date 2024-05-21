const nodemailer = require('nodemailer');
const sendEmail = async (req, res) => {
  const { fromEmail, toEmail, content, password } = req.body;
    let transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
            user: fromEmail,
            pass: password
        }
    });

    let mailOptions = {
        from: fromEmail,
        to: toEmail,
        subject:'Test email',
        text: content,
    };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
            res.json("err")
            console.error('Error occurred:', error);
        } else {
      console.log('Email sent successfully!', info.response);
      res.json("ok")
        }
    });
};

module.exports= {sendEmail};