const socket = io();
socket.on('draw', msg => {
    console.log(msg);
})

let letters = [
    {
        letter: '?',
        points: 0
    },
    {
        letter: '?',
        points: 0
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'e',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'a',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'i',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'o',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'n',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 'r',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 't',
        points: 1
    },
    {
        letter: 'l',
        points: 1
    },
    {
        letter: 'l',
        points: 1
    },
    {
        letter: 'l',
        points: 1
    },
    {
        letter: 'l',
        points: 1
    },
    {
        letter: 's',
        points: 1
    },
    {
        letter: 's',
        points: 1
    },
    {
        letter: 's',
        points: 1
    },
    {
        letter: 's',
        points: 1
    },
    {
        letter: 'u',
        points: 1
    },
    {
        letter: 'u',
        points: 1
    },
    {
        letter: 'u',
        points: 1
    },
    {
        letter: 'u',
        points: 1
    },
    {
        letter: 'd',
        points: 2
    },
    {
        letter: 'd',
        points: 2
    },
    {
        letter: 'd',
        points: 2
    },
    {
        letter: 'd',
        points: 2
    },
    {
        letter: 'g',
        points: 2
    },
    {
        letter: 'g',
        points: 2
    },
    {
        letter: 'g',
        points: 2
    },
    {
        letter: 'b',
        points: 3
    },
    {
        letter: 'b',
        points: 3
    },
    {
        letter: 'c',
        points: 3
    },
    {
        letter: 'c',
        points: 3
    },
    {
        letter: 'm',
        points: 3
    },
    {
        letter: 'm',
        points: 3
    },
    {
        letter: 'p',
        points: 3
    },
    {
        letter: 'p',
        points: 3
    },
    {
        letter: 'f',
        points: 4
    },
    {
        letter: 'f',
        points: 4
    },
    {
        letter: 'h',
        points: 4
    },
    {
        letter: 'h',
        points: 4
    },
    {
        letter: 'v',
        points: 4
    },
    {
        letter: 'v',
        points: 4
    },
    {
        letter: 'w',
        points: 4
    },
    {
        letter: 'w',
        points: 4
    },
    {
        letter: 'y',
        points: 4
    },
    {
        letter: 'y',
        points: 4
    },
    {
        letter: 'k',
        points: 5
    },
    {
        letter: 'j',
        points: 8
    },
    {
        letter: 'x',
        points: 8
    },
    {
        letter: 'q',
        points: 10
    },
    {
        letter: 'z',
        points: 10
    }

];

let playerLetters = [];

const getPlayerLetters = numberOfLettersNeeded => {
    for (i = 0; i < numberOfLettersNeeded; i++) {
        const randNum = Math.floor(Math.random() * (letters.length));
        const letter = {
            letter: letters[randNum].letter,
            points: letters[randNum].points
        };
        playerLetters.push(letters[randNum]);
        letters.splice(randNum, 1);
    }
    playerLetters.forEach(letterTile => {
        $('body').append(`<div class="letter">${letterTile.letter}</div>`)
    });
    makeDraggable();
}

const drawLetter = () => {
    for (i = 0; i < 1; i++) {
        const randNum = Math.floor(Math.random() * (letters.length));
        playerLetters.push(letters[randNum]);
        letters.splice(randNum, 1);
    }
    const lastLetterInArray = playerLetters[playerLetters.length - 1].letter;
    $('body').append(`<div class="letter">${lastLetterInArray}</div>`);
    makeDraggable();
    socket.emit('draw', 'draw');
}

const placeLetter = () => {

}

const makeDraggable = () => {
    $('.letter').draggable({
        snap: '.grid',
        stop: (event, ui) => {
        }
    });
}

for (i = 0; i < 14; i++) {
    $('.hr-container').append(`<hr class="line grid">`);
    $('.vr-container').append(`<div class="line-vert grid"></div>`);
}

$('.container-wrapper').droppable({
    accept: '.letter',
    drop: (e, ui) => {
        console.log(e.target);
        console.log(ui.draggable[0]);
    }
});

getPlayerLetters(7);
$('.draw').on('click', () => {
    drawLetter();
})

