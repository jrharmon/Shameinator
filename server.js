var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
    socket.on('shame', function(msg) {
       console.log('shamed: ' + msg);
       socket.broadcast.emit('shame', msg); 
    });
})

http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
});

