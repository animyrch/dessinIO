const EventEmitter = require('events');
const emitter = new EventEmitter();


const emitDrawingStart = function (mouse) {
    socket.emit('startDrawing', mouse);
}
socket.on('drawingStarted', mouse => {
    emitter.emit('drawingStarted', mouse);
});


const emitDrawingTrace = function (mouse) {
    socket.emit('traceDrawing', mouse);
}
socket.on('drawingTraced', mouse => {
    emitter.emit('drawingTraced', mouse);
});


const emitEraseAll = function () {
    socket.emit('eraseDrawing');
}
socket.on('drawingErased', _ => {
    emitter.emit('drawingErased');
});


const emitConnection = function (pseudo) {
    socket.emit("pseudo", pseudo);
}
socket.on('listUsers', list => {
    emitter.emit('listUsers', list);
});


const emitNewMessage = function (msg) {
    socket.emit('message', msg);
}
socket.on('userMessages', userMessages => {
    emitter.emit('userMessages', userMessages);
});


export default {
    emitter,
    EventEmitter,
    emitConnection,
    emitEraseAll,
    emitDrawingStart,
    emitDrawingTrace,
    emitNewMessage
}