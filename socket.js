const { http } = require('./server');
const { emitter } = require('./emitter');

const io = require('socket.io')(http);

// io c'est tout socket.io / socket c'est l'utilisateur qui vient de se connecter
io.on('connection', function (socket) {
    console.log(`Quelqu'un vient de se connecter`);

    socket.on('pseudo', pseudo => {
        socket.pseudo = pseudo;
        emitter.emit("connection", socket);
    });

    socket.on('message', message => {
        emitter.emit("messageInput", socket.pseudo, message);
    });

    socket.on('startDrawing', mouse => {
        socket.broadcast.emit('drawingStarted', mouse);
    });
    socket.on('traceDrawing', mouse => {
        socket.broadcast.emit('drawingTraced', mouse);
    });
    socket.on('stopDrawing', mouse => {
        socket.broadcast.emit('drawingStopped', mouse);
    });
    socket.on('eraseDrawing', _ => {
        socket.broadcast.emit('drawingErased');
    });
})

const publishUsers = (listUsers) => {
    io.emit('listUsers', listUsers);
}

const publishMessages = (messages) => {
    io.emit('userMessages', messages);
}
const publisMessagesToUser = (messages, socket) => {
    socket.emit('userMessages', messages);
}


module.exports = {
    publishUsers,
    publishMessages,
    publisMessagesToUser
}