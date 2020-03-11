const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const listUsers = [];

app.get('/', (req,res,next) => {
    console.log('route')
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', (socket) => {
    console.log(`Quelqu'un vient de se connecter`);

    socket.on('pseudo', pseudo => {
        // quand je reçoit un message d'un socket, je le renvoie à tout le monde
        socket.pseudo = pseudo;
        listUsers.push(pseudo);
        io.emit('listUsers', listUsers);
    })
}) 
http.listen(3000)