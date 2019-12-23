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
    let docRef = db.collection('room').doc(req.params.room);
    let getDoc = docRef.get()
    .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            res.send(doc.data().letters);
        }
    })
    .catch(err => {
        console.log('Error getting document', err);
    });
});

app.get('/room/:room', (req, res) => {
    const room = req.params.room;
    console.log(room)
    res.send(`${room}`);
});

app.post('/letters-update/:room', (req, res) => {
    let docRef = db.collection('room').doc(req.params.room);
    docRef.set({
        letters: req.body.letters
    })
    .then(() => {
        res.send('updated!');
    })
    // res.send(letters);
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('draw', room => {
        socket.to(room).emit('draw');
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
    socket.on('start game', room => {
        socket.to(room).emit('start game', 'info');
        // Need to distribute to each player only once...
    });
  });

http.listen(port, () => console.log(`Listening on port ${port}`));