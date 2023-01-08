require('dotenv').config()

const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
if (!process.env.MONGODB_URI) {
  throw new Error("Did not provide MongoDB_URI")
}
const MONGODB_URI = process.env.MONGODB_URI
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
  res.send(io.sockets.adapter.rooms);
})

MongoClient.connect(MONGODB_URI, async function (err, db) {
  if (err) throw err;
  var dbo = db.db(MONGODB_DB);
  var collection = dbo.collection("lobbies"); 
  io.on('connection', async (socket) => {
    console.log(`User connected ${socket.id}`);
    console.log(io.sockets.adapter.rooms);
    socket.on('create_lobby', async (data) => {
      const { name, id } = data;
      socket.join(id);
      console.log("sent update_lobby");
      collection.insertOne({ code: id, players: [name] }).then(() => {
        if (err) throw err;
        socket.join(id);
        io.in(id).emit('update_lobby', { players: [name] });
      });
    });
    socket.on('join_lobby', async (data) => {
      const { name, lobby } = data;
      const lobbiesFound = collection.countDocuments({ code: lobby }).then(() => {
        if (lobbiesFound == 0) {
          socket.emit('invalid_lobby')
        } 
        else {
          collection.findOneAndUpdate({ code: lobby }, { $push: { players: name } }, { returnDocument: 'after' }, (err, res) => {
            socket.emit('valid_lobby', { lobby });
            socket.join(lobby);
            socket.on('moved_lobbies', () => {
              console.log("update_lobby v2");
              console.log(res.value.players);
              io.in(lobby).emit('update_lobby', { players: res.value.players });
            })
          })
        }
      })
      //join room
    });
    socket.on('start_game_req', async (data) => {
      const { lobby } = data;
      console.log(data)
      io.in(lobby).emit('start_game')
    }) 
  });
});

server.listen(4000, () => 'Server is running on port 4000');