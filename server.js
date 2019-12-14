const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const port = process.env.PORT || 5000;
let letters = require('./letters').letters;

console.log(letters);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/' + '/index.html'));
});

app.get('/letters', (req, res) => {
    res.send(letters);
});

app.post('/letters-update', (req, res) => {
    letters = req.body.letters;
    res.send(letters);
})

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        letters = require('./letters').letters;
    });
    socket.on('draw', msg => {
        console.log(msg);
        io.emit('draw', msg);
    });
  });

http.listen(port, () => console.log(`Listening on port ${port}`));