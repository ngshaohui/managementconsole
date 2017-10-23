var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Cors middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods",  "GET, POST, HEAD, OPTIONS, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //needs to come before routes are defined

var port = process.env.PORT || 3000;

// Set Static Folder
app.use(express.static(path.join(__dirname, '/public')));

io.on('connection', (socket) => {
  
  console.log('user connected');

  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  //planner creates a new task
  socket.on('create-task', (message) => {
    io.emit('message', { type: 'new-task', text: message });
    // do something
  });

});

// Start server
app.listen(port, () => {
  console.log('server started on port ' + port);
});