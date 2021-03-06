var express = require('express'),
	app = express();

var port = process.env.PORT || 3008;

var io = require('socket.io').listen(app.listen(port));

require('./config')(app, io);
require('./routes')(app, io);

console.log('App funcionando en http://localhost:' + port);