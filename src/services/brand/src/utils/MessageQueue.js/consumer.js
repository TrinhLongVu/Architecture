const amqp = require('amqplib/callback_api');

function startConsumer(queue, callback) {
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
                callback(msg.content.toString());
            }, {
                noAck: true
            });
        });
    });
}

module.exports = { startConsumer };
