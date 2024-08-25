const express = require('express');
const router = express.Router();
const ThuongHieuController = require('../controllers/thuonghieu.c');
const amqp = require('amqplib/callback_api');

router.get('/getUserId/:BrandId', ThuongHieuController.getUserId);
router.get('/getBrandId/:UserId', ThuongHieuController.getBrandId);

router.post('/', ThuongHieuController.createBrand);

const queue = 'brand_queue';

amqp.connect('amqp://rabbitmq', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        channel.assertQueue(queue, {
            durable: true
        });
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function(msg) {
            console.log(" [x] Received '%s'", msg.content.toString());
            ThuongHieuController.handleNewUser(msg.content.toString());
        }, {
            noAck: true
        });
    });
});

module.exports = router;
