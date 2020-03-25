const socket = require('./socket');

const listUsers = [];

const add = (pseudo) => {
    listUsers.push(pseudo);
}

const publish = () => {
    socket.publishUsers(listUsers);
}

module.exports = {
    add,
    publish
}