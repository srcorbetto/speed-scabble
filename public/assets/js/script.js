const socket = io();
socket.on('draw', msg => {
    console.log(msg);
});
socket.on('join room', roomData => {
    room = roomData.room;
    const numberOfPlayersInRoom = roomData.allRooms[roomData.room].length;
    console.log(roomData);
    socket.emit('start game');
    // if (numberOfPlayersInRoom === 1) {
    //     console.log('You are the only one in the game');
    //     player = 1;
    // } else if (numberOfPlayersInRoom === 2) {
    //     console.log('You are player 2!');
    //     player = 2;
    //     socket.emit('start game');
    // }
});
socket.on('start game', data => {
    getPlayerLetters(7);
    // if (player === 1) {
    //     getPlayerLetters(7);
    // } else if (player === 2) {
    //     // Delay draw for opponent
    //     setTimeout(()=> {
    //         getPlayerLetters(7);
    //     }, 2000);
    // }
});

let player;
let playerLetters = [];
let room;

const getPlayerLetters = numberOfLettersNeeded => {
    console.log('test');
    $.get( `/letters/${room}`, lettersFromServer => {
        for (i = 0; i < numberOfLettersNeeded; i++) {
            const randNum = Math.floor(Math.random() * (lettersFromServer.length));
            playerLetters.push(lettersFromServer[randNum]);
            lettersFromServer.splice(randNum, 1);
        }
        const updatedLetters = {
            letters: lettersFromServer
        };
        $.post('/letters-update', updatedLetters, data => {
            console.log(data);
            playerLetters.forEach(letterTile => {
                $('body').append(`<div class="letter">${letterTile.letter}</div>`)
            });
            makeDraggable();
        });
    });
}

const drawLetter = () => {
    $.get( "/letters", lettersFromServer => {
        for (i = 0; i < 1; i++) {
            const randNum = Math.floor(Math.random() * (lettersFromServer.length));
            playerLetters.push(lettersFromServer[randNum]);
            lettersFromServer.splice(randNum, 1);
        }
        const updatedLetters = {
            letters: lettersFromServer
        };
        $.post('/letters-update', updatedLetters, data => {
            console.log(data);
            const lastLetterInArray = playerLetters[playerLetters.length - 1].letter;
            $('body').append(`<div class="letter">${lastLetterInArray}</div>`);
            makeDraggable();
            socket.emit('draw', 'draw');
        });
    });
}

const makeDraggable = () => {
    $('.letter').draggable({
        snap: '.grid',
        stop: (event, ui) => {
        }
    });
}

const initGrid = () => {
    for (i = 0; i < 14; i++) {
        $('.hr-container').append(`<hr class="line grid">`);
        $('.vr-container').append(`<div class="line-vert grid"></div>`);
    }
}

$('.container-wrapper').droppable({
    accept: '.letter',
    drop: (e, ui) => {
        console.log(e.target);
        console.log(ui.draggable[0]);
    }
});

// Form submit...
$('form').on('submit', e => {
    e.preventDefault();
    const room = $('input[name="room"]').val();
    socket.emit('join room', room);
});

initGrid();
$('.draw').on('click', () => {
    drawLetter();
})

// TO DO:
// =====================================================================
// Make the emit on draw draw a letter for everyone connected