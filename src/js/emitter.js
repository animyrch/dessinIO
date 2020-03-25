const emitConnection = function (pseudo) {
    socket.emit("pseudo", pseudo);
}
const emitEraseAll = function () {
    socket.emit('eraseDrawing');
}
const emitDrawingStart = function (mouse) {
    socket.emit('startDrawing', mouse);
}
const emitDrawingTrace = function (mouse) {
    socket.emit('traceDrawing', mouse);
}
const emitNewMessage = function (msg) {
    socket.emit('message', msg);
}
export default {
    emitConnection,
    emitEraseAll,
    emitDrawingStart,
    emitDrawingTrace,
    emitNewMessage
};