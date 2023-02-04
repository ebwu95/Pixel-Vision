require('dotenv').config()

//required stuff
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

//function for checking if user guesses correct block color
const verify = (guesses, answers) => {
  let score = 0;
  for (let i = 0; i < guesses.length; i++) {
    for (let j = 0; j < guesses[0].length; j++) {
      if (guesses[i][j] == answers[i][j]) {
        score += 100;
      }
    }
  }
  return score;
}

MongoClient.connect(MONGODB_URI, async function (err, db) {
  if (err) throw err;
  var dbo = db.db(MONGODB_DB);
  var collection = dbo.collection("lobbies");

  //connects to server
  io.on('connection', async (socket) => {
    console.log(`User connected ${socket.id}`);
    console.log(io.sockets.adapter.rooms);

    //creates lobby and updates the playerlist when players join
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

    //lets player join valid lobby
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

    //starts game and creates gameboard 
    socket.on('start_game_req', async (data) => {
      const { lobby, score, round} = data;
      console.log(data)
      //console.log("socket.on: round: " + round);
      const maxRound = round;
      const colours = ['red', 'green', 'yellow', 'blue', 'black']
      const rows = []
      for (let i = 0; i < 3; i++) {
          const column = []
          for (let j = 0; j < 3; j++){
              const ind = Math.floor(Math.random() * 5)
              column.push(colours[ind]) 
          }
          rows.push(column)
      }
      receipt = new Array(score.length).fill(false)//boolean array that stores whether or not each socket had received the scoket event or not 
      collection.updateOne({code: lobby }, {$set: {round : 1, boxes: rows, scores: score, received: receipt}}).then(() => {
          io.in(lobby).emit('start_round_0', { round: 1, scores: score, boxes: rows, totalRound: maxRound});
      })
    })

    //ends the memorizing round and starts the round to fill the white blocks with guesses
    socket.on('end_round_0', async (data) => {
      const rows = []
      for (let i = 0; i < 3; i++) {
          rows.push(new Array(3).fill('white'))
      }
      io.in(data.lobby).emit('start_round_1', { round: data.round, boxes: rows });
    });
    
    //ends the guessing round and makes a new memorizing round with new random colors
    socket.on('end_round_1', async (data) => {
      console.log("end_round_1 received");
      collection.findOne({code: data.lobby}, (err, res) => {
        if (err) throw err;
        const scoreDelta = verify(data.guess, res.boxes);
        var score = res.scores;
        var receipt = res.received;
        receipt[data.player] = true;
        score[data.player] += scoreDelta;
        const done = receipt.every(value => value);
        const colours = ['red', 'green', 'yellow', 'blue', 'black']
        const rows = []
        for (let i = 0; i < 3; i++) {
            const column = []
            for (let j = 0; j < 3; j++){
                const ind = Math.floor(Math.random() * 5)
                column.push(colours[ind]) 
            }
            rows.push(column)
        }
        if (done) {
          receipt = receipt.fill(false);
        }
        collection.updateOne({code: data.lobby }, {$set: {round : data.round, boxes: rows, scores: score, received: receipt}}).then(() => {
          io.in(data.lobby).emit('start_round_0', { round: data.round, boxes: rows, scores: score});
        });
      });
    });

  });
});

server.listen(4000, () => 'Server is running on port 4000');
