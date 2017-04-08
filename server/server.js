const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(bodyParser.json());
app.use(express.static(publicPath));

// ON
io.on('connection', (socket) => {
  console.log(`New user connected`);

  socket.emit('adminMessage', generateMessage('Admin', 'Welcome to the chat app'));
  socket.broadcast.emit('newUserMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

});

server.listen(port, () => {
  console.log(`Server up on port: ${port}`);
});

module.exports = {app};
