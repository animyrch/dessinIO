
    //Get the pseudo of user
    const pseudo = prompt("Entrer votre pseudonyme:","");
    //Emit pseudo
    socket.emit("pseudo",pseudo);
    socket.on('listUsers', list => {
        console.log(list);
    })

