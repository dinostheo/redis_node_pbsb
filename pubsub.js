var express = require('express');

var app = module.exports = express.createServer();

app.use(express.static(__dirname + '/public'));

const redis = require('redis');
const client = redis.createClient();

const io = require('socket.io');

if (!module.parent) {
    app.listen(3000);
    console.log("Express server listening on port %d", app.address().port)

    const socket  = io.listen(app);

    socket.on('connection', function(client) {
        const subscribe = redis.createClient();
        subscribe.subscribe('pubsub');

        subscribe.on("message", function(channel, message) {
            client.send(message);
        });

        client.on('message', function(msg) {
        });

        client.on('disconnect', function() {
            subscribe.quit();
        });
    });
}