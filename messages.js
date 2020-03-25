const socket = require('./socket');

const messages = [];

const sendHistory = () => {
    if (messages.length > 0) {
        socket.publishMessages(messages);
    }
}

const sendHistoryToUser = (connection) => {
    if (messages.length > 0) {
        socket.publisMessagesToUser(messages, connection);
    }
}

const add = (message) => {
    messages.push(message);
    sendHistory();
}

module.exports = {
    sendHistory,
    sendHistoryToUser,
    add
}