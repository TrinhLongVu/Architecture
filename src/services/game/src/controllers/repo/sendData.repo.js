'use strict'

import nodemailer from 'nodemailer';
// interface 
class SendData {
    send({
        subject,
        text,
        to
    }) {};
}

class Mail extends SendData {
    async send({
        subject,
        text,
        to
    }) {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL_SERVICE_USER,
                pass: process.env.EMAIL_SERVICE_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_SERVICE_USER,
            to: to,
            subject: subject || `no content`,
            text: text || `no reply`,
        };

        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    }
}

class SMS extends SendData {
    send({
        subject,
        text
    }) {

    }
}

class sendDataFactory {
    static sendData(type) {
        switch (type.toLowerCase()) {
            case 'mail':
                return new Mail();
            case 'sms':
                return new SMS();
            default:
                throw new Error(`Send Data type '${type}' is not recognized.`);
        }
    }
}

export default sendDataFactory