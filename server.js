const express = require('express');
const app = express();
const http = require('http').createServer(app)
const socketConnection = require('./socketConnection')

app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req,res,next) => {
    console.log('route')
    res.sendFile(__dirname + '/index.html')
})

socketConnection.connection(http);
http.listen(3000)