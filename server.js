const express = require('express');
const app = express();
const http = require('http').createServer(app);
const { socketConnection } = require('./socketConnection');

app.use(express.static('public'));
app.use(express.static('dist'));

socketConnection(http);
http.listen(3000);