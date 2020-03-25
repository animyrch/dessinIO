const updateUserMessages = (userMessages) => {
    chat.innerHTML = '';
    for(const message of userMessages) {
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(message);
        node.appendChild(textnode);
        chat.appendChild(node);
    }
}

export default {
    updateUserMessages
}