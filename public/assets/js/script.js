const socket = io();
let player;
let playerLetters = [];
let room;

socket.on('draw', msg => {
    drawLetter();
});
socket.on('join room', roomData => {
    room = roomData.room;
    const numberOfPlayersInRoom = roomData.allRooms[roomData.room].length;
    console.log(roomData);
    if (numberOfPlayersInRoom === 1) {
        console.log('You are the only one in the game');
        player = 1;
    } else if (numberOfPlayersInRoom === 2) {
        // console.log('You are player 2!');
        // player = 2;
        socket.emit('start game', room);
    }
});
socket.on('start game', data => {
    console.log(data);
    // history.pushState('', '', `/${room}/1`);
    $('.get-letters').on('click', () => {
        getPlayerLetters(7);
    });
});

const getPlayerLetters = numberOfLettersNeeded => {
    $.get( `/letters/${room}`, lettersFromDb => {
        console.log(lettersFromDb);
        for (i = 0; i < numberOfLettersNeeded; i++) {
            const randNum = Math.floor(Math.random() * (lettersFromDb.length));
            playerLetters.push(lettersFromDb[randNum]);
            lettersFromDb.splice(randNum, 1);
        };
        const updatedLetters = {
            letters: lettersFromDb
        };
        $.post(`/letters-update/${room}`, updatedLetters, data => {
            console.log(data);
            playerLetters.forEach(letterTile => {
                $('body').append(`<div class="letter">${letterTile.letter}</div>`)
            });
            makeDraggable();
        });
    });
}

const drawLetter = () => {
    $.get( `/letters/${room}`, lettersFromDb => {
        for (i = 0; i < 1; i++) {
            const randNum = Math.floor(Math.random() * (lettersFromDb.length));
            playerLetters.push(lettersFromDb[randNum]);
            lettersFromDb.splice(randNum, 1);
        }
        const updatedLetters = {
            letters: lettersFromDb
        };
        $.post(`/letters-update/${room}`, updatedLetters, data => {
            const lastLetterInArray = playerLetters[playerLetters.length - 1].letter;
            $('body').append(`<div class="letter">${lastLetterInArray}</div>`);
            makeDraggable();
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
    socket.emit('draw', room);
});

// TO DO:
// =====================================================================
// Make the emit on draw draw a letter for everyone connected