"use strict";
const io = require('socket.io').listen(8899);
const listUsers = [];

// io c'est tout socket.io / socket c'est l'utilisateur qui vient de se connecter
io.on('connection', function (socket) {
    console.log(`Quelqu'un vient de se connecter`);

    socket.on('pseudo', pseudo => {
        // quand je reçoit un message d'un socket, je le renvoie à tout le monde
        socket.pseudo = pseudo;
        listUsers.push(pseudo);
        io.emit('listUsers', listUsers);
    })
})
module.exports = { io }