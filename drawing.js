const {myEmitter, socket} = require("./socketConnection");

function drawing() {
    myEmitter.on('pseudo', a => {
        socket.broadcast.emit('drawingStarted', mouse)
    })
}
module.exports = { drawing }
