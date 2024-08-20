
class GameService {
    static clients = new Map();
    static scoreClients = [];

    static Game(io) {
        const gameServiceInstance = new GameService();

        io.on('connection', (socket) => {
            socket.on('join-socket', (idUser) => {
                this.clients.set(idUser, socket);
            });

            socket.on('join-channel', (data) => {
                const { channel, idUser } = data;
                this.clients.get(idUser).join(channel);
            });

            socket.on('leave-channel', (data) => {
                const { channel, idUser } = data;
                this.clients.get(idUser).leave(channel);
            });

            socket.on('send-channel', (data) => {
                const { channel, idUser, content, score } = data;

                if (gameServiceInstance.isExitClient(idUser)) {
                    for (let client of this.scoreClients) {
                        if (client.idUser === idUser) {
                            client.score += score;
                            console.log(client.score)
                        }
                    }
                } else {
                    this.scoreClients = [...this.scoreClients, {
                        idUser, 
                        channel,
                        score
                    }];
                }
            });
            socket.on('end-channel', (data) => {
                const { channel, idUser } = data;
                // save db
                console.log(data);
            });
        });
    }

    isExitClient(idUser) {
        for (let client of GameService.scoreClients) {
            if (client.idUser === idUser) {
                return true;
            }
        }
        return false;
    }
}

export default GameService;


