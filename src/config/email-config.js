const nodemailer = require('nodemailer');
const {EMAIL_ID, EMAIL_PASS} = require('./server-config');

const sender = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.net",
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
})

module.exports = sender; 