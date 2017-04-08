var socket = io();

//ON
socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('newMessage', function (message) {
    console.log('New message:', message);
  });

  socket.emit('createMessage', {
    to: 'server@example',
    text: 'Creating new message'
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
