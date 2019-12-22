const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 5000;
const db = require('./fb-config').db;
let letters = require('./letters').letters;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/' + '/index.html'));
});

app.get('/letters/:room', (req, res) => {
    console.log(req.params.room);
    // res.send(letters);
});

app.get('/room/:room', (req, res) => {
    const room = req.params.room;
    console.log(room)
    res.send(`${room}`);
});

app.post('/letters-update', (req, res) => {
    letters = req.body.letters;
    res.send(letters);
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        letters = require('./letters').letters;
    });
    socket.on('draw', msg => {
        console.log(msg);
        io.emit('draw', msg);
    });
    socket.on('join room', room => {
        socket.join(room);
        const RoomData = {
            allRooms: io.sockets.adapter.rooms,
            room: room
        };
        let docRef = db.collection('room').doc(room);
        docRef.set({
            letters: letters
        })
        .then(e => {
            // io.to(room).emit('join room', e);
            io.to(room).emit('join room', RoomData);
        });
    });
    socket.on('start game', () => {
        io.emit('start game');
    });
  });

// let docRef = db.collection('room').doc('test');

// let setAda = docRef.set({
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815
// });

http.listen(port, () => console.log(`Listening on port ${port}`));