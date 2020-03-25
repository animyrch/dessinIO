import('./connection.js');
import canvasManager from "./canvasManager.js";
import domManager from "./domManager.js";

import webSocket from './webSocket.js';
const emitter = webSocket.emitter;

emitter.on('drawingStarted', mouse => {
    canvasManager.startDrawing(mouse);
});

emitter.on('drawingTraced', mouse => {
	canvasManager.trace(mouse);
});

emitter.on('drawingErased', _ => {
    canvasManager.eraseDrawing();
});

emitter.on('listUsers', list => {
    console.log(list);
});

emitter.on('userMessages', userMessages => {
    domManager.updateUserMessages(userMessages);
});