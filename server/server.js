require('dotenv').config()

// initialize express and http servers
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
if (!process.env.MONGODB_URI) {
  throw new Error("Did not provide MongoDB_URI") // requires each dev to make an .env file with the mongodb uri
}
const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = "PixelVision";
const MongoClient = require('mongodb').MongoClient;
const server = http.createServer(app);

app.use(cors()); // "allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served"

const io = new Server(server, { // init socket.io server
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
})

app.get('/', (req, res) => {
  res.send(io.sockets.adapter.rooms);
})

MongoClient.connect(MONGODB_URI, async function (err, db) { // connect to mongodb
  if (err) throw err;
  var dbo = db.db(MONGODB_DB); // connect to PixelVision database
  var collection = dbo.collection("lobbies"); // connect to PixelVision's "lobbies" collection

  // initialize the socket.io library to listen for messages
  io.on('connection', async (socket) => {
    // console.log(`User connected ${socket.id}`);
    console.log(io.sockets.adapter.rooms);

    // adds a listener for create_lobby events that creates a subset group for broadcasting messages,
    // and updates the mongodb database with the new user and lobby
    socket.on('create_lobby', async (data) => {
      const { name, id } = data; // name: player's username, id: player's socket.id (e.g. nVWTGlfBcky1Rpp0AAAB)
      socket.join(id); // user joins a specific room ("lobby") for broadcasted messages
      // console.log("sent update_lobby");

      // insert a single document into lobbies collection with the new player's username and id
      collection.insertOne({ code: id, players: [name] }).then(() => {
        if (err) throw err;
        socket.join(id);
        io.in(id).emit('update_lobby', { players: [name] }); // emit a message for client to update player displays 
      });

    });

    // adds a listener for join_lobby events and connects the player to the lobby with the specified code
    socket.on('join_lobby', async (data) => {
      const { name, lobby } = data;
      const lobbiesFound = collection.countDocuments({ code: lobby }).then(() => {
        if (lobbiesFound == 0) {
          socket.emit('invalid_lobby');
        }
        else {
          // finds lobby with that code, appends the new player's name into that collection
          collection.findOneAndUpdate({ code: lobby }, { $push: { players: name } }, { returnDocument: 'after' }, (err, res) => {
            socket.emit('valid_lobby', { lobby });
            socket.join(lobby);
            socket.on('moved_lobbies', () => {
              io.in(lobby).emit('update_lobby', { players: res.value.players }); // res.value.players lists all players in the lobby
            })
          })
        }
      })
      //join room
    });

    // listen for a request of host starting the game, then emits a start_game event
    socket.on('start_game_req', async (data) => {
      const { lobby } = data;
      // console.log(data)
      io.in(lobby).emit('start_game')
    })
  });

});

server.listen(4000, () => 'Server is running on port 4000');