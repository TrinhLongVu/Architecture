'use strict'

import nodemailer from 'nodemailer';
import { Vonage } from '@vonage/server-sdk'


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
    async send({
        subject,
        text
    }) {
        const from = "Vonage APIs"
        const to = "84328790394"

        const vonage = new Vonage({
            apiKey: "93e292c7",
            apiSecret: "1Od55GK8EU70eTp7"
          })
          
        await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
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