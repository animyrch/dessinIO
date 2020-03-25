const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.static('dist'));

const http = require('http').createServer(app);
const port = 3000;

const {socketConnection} = require('./socketConnection');
const {drawing} = require('./drawing');


socketConnection(http);
drawing();


const startServer = () => {
    http.listen(port);
    console.log("Server started at " + port);
}

export default {
    startServer,
    http
}