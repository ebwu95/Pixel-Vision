const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const server = http.createServer(app);
app.use(cors()); 
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
app.get('/', (req, res) => {
  res.send('Hello world');
})
io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on('join_lobby', (data) => {
    const { name, lobby } = data; 
    socket.join(lobby); 
  });
})

server.listen(4000, () => 'Server is running on port 4000');