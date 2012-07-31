redis_node_pbsb
========================================


A simple node.js socket.io app that shows notification, which are published to a channel by redis!

Based on the code I found [here](http://stackoverflow.com/questions/4441798/how-to-use-redis-publish-subscribe-with-nodejs-to-notify-clients-when-data-value):

Install
=======
Download and install <a href='http://nodejs.org/#download'>node.js</a>

`npm install express`<br />
`npm install socket.io`

How to run pubsub.js
====================
`node pubsub.js`

Check your browser in the port that you have set `e.g. http://localhost:3000` and publish with a redis client a message in the channel that you are subscribed.
You will see the live updates!

How to run pub_psub.js
======================
`node pub_psub.js`

In your redis client `sadd redis:channels channel1 channel2 channel3`
Check your browser in the port that you have set `e.g. http://localhost:3000` and publish with a redis client a message in any of the channels that you have added in the redis:channels set.
You will see the live updates!

![githalytics.com alpha](https://cruel-carlota.pagodabox.com/0e65ac0ca54560dad59ec308af9296fc)