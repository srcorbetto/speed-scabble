const socket = io();
socket.on('draw', msg => {
    console.log(msg);
})

let playerLetters = [];

const getPlayerLetters = numberOfLettersNeeded => {
    $.get( "/letters", lettersFromServer => {
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

initGrid();
getPlayerLetters(7);
$('.draw').on('click', () => {
    drawLetter();
})

// TO DO:
// =====================================================================
// Make the emit on draw draw a letter for everyone connected