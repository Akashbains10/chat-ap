const {Server} = require('socket.io')

const startSocket = (server) => {
    const io = new Server(server)
};

module.exports = {
    startSocket
}