const updateUserMessages = (userMessages) => {
    chat.innerHTML = '';
    //Créé un fragment de document qui vas contenir les node message avant leurs insertion
    let messagesFragment = document.createDocumentFragment();
    for(const message of userMessages) {
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);
        messagesFragment.appendChild(node);
    }
    chat.appendChild(messageFragment);
}

export default {
    updateUserMessages
}