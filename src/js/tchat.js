import emitter from './emitter.js';


tchatForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    emitter.emitNewMessage(msg.value);
    msg.value = '';
});



