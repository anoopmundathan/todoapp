'use strict';

var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static('public'));

app.get('/vendor/angular.js', (req, res) => {
	res.sendFile(path.join(__dirname, '/node_modules', 'angular', 'angular.min.js'));
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Server running at port ' + port);
});

console.log(path.join(__dirname));
