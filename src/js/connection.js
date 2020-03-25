import emitter from './webSocket.js';

//Get the pseudo of user
const pseudo = prompt("Entrer votre pseudonyme:","");

emitter.emitConnection(pseudo);
