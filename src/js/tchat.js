import emitter from './webSocket.js';

tchatForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    emitter.emitNewMessage(msg.value);
    msg.value = '';
});



