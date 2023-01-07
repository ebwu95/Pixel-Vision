const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const MONGODB_URI = "mongodb+srv://client:pogger123@pixvis.gryvtqp.mongodb.net/?retryWrites=true&w=majority"
const MONGODB_DB = "PixelVision";
const MongoClient = require('mongodb').MongoClient;
const server = http.createServer(app);
app.use(cors()); 
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})
app.get('/', (req, res) => {
  res.send('server');
})

MongoClient.connect(MONGODB_URI, function(err, db) {
  if (err) throw err;
  var dbo = db.db(MONGODB_DB);
  var collection = dbo.collection("lobbies");
  io.on('connection', (socket) => {
    console.log(`User connected ${socket.id}`);
    socket.on('create_lobby', (data) => {
      const { name } = data;
      collection.insertOne({code: socket.id, players: [name]}, function(err, result) {
        if (err) throw err;
        socket.join(socket.id);
      });
    });
    socket.on('join_lobby', (data) => {
      const { name, lobby } = data; 
      socket.join(lobby);  //join room
    });
  });
});

server.listen(4000, () => 'Server is running on port 4000');