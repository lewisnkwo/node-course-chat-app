var socket = io();

//ON
socket.on('connect', function () {
  console.log('Connected to server');

  socket.on('adminMessage', function (adminMessage) {
    console.log(adminMessage);
  });

  socket.on('newUserMessage', function (newUserMessage) {
    console.log(newUserMessage);
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage:', message);
})
