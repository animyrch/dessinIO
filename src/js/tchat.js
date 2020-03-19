

tchatForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log(msg.value);
    socket.emit('message', msg.value);
    msg.value = '';
});
socket.on('userMessages', userMessages => {
    chat.innerHTML = '';
    for(const message of userMessages) {
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);
        chat.appendChild(node);
    }
});


