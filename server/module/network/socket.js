class ioHandler {

    static close(io) {
        io.emit('close', 'true');
    }

    static emit(io, title, message) {
        io.emit(title, message);
    }

}

module.exports = ioHandler;