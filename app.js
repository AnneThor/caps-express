'use strict';

require('dotenv').config();
const app = require('express')();

// create a new instance of socket.io by passing the http object
// then listne on connection for incoming sockets
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server up on port ${port}`);
})

app.post('/pickup', (req, res) => {
  io.sockets.emit('pickup', req.body);
})
