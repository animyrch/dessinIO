"use strict";

let word = "Yo";
let winner = false;

function socketConnection(http) {
    const io = require('socket.io')(http);
    const listUsers = [];
    const messages = [];

    // io c'est tout socket.io / socket c'est l'utilisateur qui vient de se connecter
    io.on('connection', function (socket) {
        console.log(`Quelqu'un vient de se connecter`);

        socket.on('pseudo', pseudo => {
            console.log(pseudo)
            // quand je reçoit un message d'un socket, je le renvoie à tout le monde
            socket.pseudo = pseudo;
            listUsers.push(pseudo);
            io.emit('listUsers', listUsers);
        });
        socket.on('message', message => {
            if(message != ''){
                if(isWinner(message)){
                    // Gagnant
                    winner = true;
                    messages.push(socket.pseudo + ' est le gagnant');
                    io.emit('userMessages', messages)
                }else{
                    messages.push(socket.pseudo + ' : ' + message);
                    // quand je reçoit un message d'un socket, je le renvoie à tout le monde
                    io.emit('userMessages', messages);
                }
            }
        });
        socket.on('startDrawing', event => {
            console.log(event);
            socket.broadcast.emit('drawingStarted', event);
        });
        socket.on('stopDrawing', event => {
            socket.broadcast.emit('drawingStopped', event);
        });
    })
}

function isWinner(message){
    return message == word && !winner;
}

module.exports = { socketConnection }