import socket from "socket.io"

class GameService {
    static clients = new Map();
    static Game(io) {
        io.on('connection', (socket) => {
            socket.on('join-socket', (idUser) => {
                this.clients.set(idUser, socket);
            })
        
            socket.on('join-channel', (data) => {
                const { channel, idUser } = data;
                this.clients.get(idUser).join(channel);
            });
        
            socket.on('leave-channel', (data) => {
                const { channel, idUser } = data;
                this.clients.get(idUser).leave(channel);
            });

            socket.on('send-channel', (data) => {
                const { channel, idUser, content } = data;
                this.clients.get(idUser).to(channel).emit('send-channel', { content });
            })
        });
    }
}

export default GameService;

