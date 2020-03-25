import('./connection.js');
import('./emitter.js');
import canvasManager from "./canvasManager.js";
import domManager from "./domManager.js";

socket.on('drawingStarted', mouse => {
    canvasManager.startDrawing(mouse);
});

socket.on('drawingTraced', mouse => {
	canvasManager.trace(mouse);
});

socket.on('drawingErased', _ => {
    canvasManager.eraseDrawing();
});


socket.on('listUsers', list => {
    console.log(list);
});

socket.on('userMessages', userMessages => {
    domManager.updateUserMessages(userMessages);
});