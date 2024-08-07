import app from './src/app.js'
import socketIo from 'socket.io';

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

const io = socketIo(server,  {
    cors: {
      origin: "http://localhost:3001",  // Allow only http://localhost:3001 to connect
      methods: ["GET", "POST"]          // Optional: specify methods to allow
    }
});

import triviaSocket from "./src/socket/trivia.js"
triviaSocket.Game(io);

app.listen(PORT, () => {
    console.log(`server authentication is running with PORT ${PORT}`)
})