const { emitter } = require('./emitter');
const { startServer } = require('./server');
const socket = require('./socket');
const users = require('./users');
const messages = require('./messages');
const wordManager = require('./wordManager');

startServer();

emitter.on('connection', (socket) => {
    //on connection, user is added to the user list
    users.add(socket.pseudo);
    //user list is published to everyone
    users.publish();
    //chat history is published for everyone
    messages.sendHistoryToUser(socket);
});

emitter.on('messageInput', (pseudo, message) => {
    if (message != '') {
        if(wordManager.correctGuess(message)) {
            messages.add(pseudo + ' est le gagnant');
        } else {
            messages.add(pseudo + ' : ' + message);
        }
    }
});