import http from 'http'; // Import the 'http' module

import app from './src/app.js'; // the app.js file
import { Server } from "socket.io";

const PORT = process.env.PORT || 3003;
const server = http.createServer(app); // Create HTTP server with your app

const io = new Server(server, {
  cors: {
      origin: `http://localhost:${PORT}`, // Allow only http://localhost:3001 to connect
      methods: ["GET", "POST"] // Optional: specify methods to allow
  }
});

import triviaSocket from "./src/socket/trivia.js"
triviaSocket.Game(io); // Initialize the socket.io instance with the Game function

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
