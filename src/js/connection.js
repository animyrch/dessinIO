//IFE Connection
(function(){
    //Initialize socket
    const socket = io();
    //Get the pseudo of user
    const pseudo = prompt("Entrer votre pseudonyme:","");
    //Emit pseudo
    socket.emit("pseudo",pseudo);
})()