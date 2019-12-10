let game = {
    letters: [
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

    ]
};

let playerLetters = [];

const getPlayerLetters = () => {
    for (i = 0; i < 50; i++) {
        console.log(`length: ${game.letters.length}`);
        const randNum = Math.floor(Math.random() * (game.letters.length));
        console.log(`length: ${game.letters.length}`);
        console.log(`number: ${randNum}`);
        const letter = {
            letter: game.letters[randNum].letter,
            points: game.letters[randNum].points
        };
        console.log(`length: ${game.letters.length}`);
        playerLetters.push(letter);
        console.log(`length: ${game.letters.length}`);
        game.letters.splice(randNum, 1);
        console.log(`length: ${game.letters.length}`);
        console.log(`=====================================================`);
        
        // console.log(`length: ${game.letters.length}`);
        // const randNum = Math.floor(Math.random() * (game.letters.length + 1));
        // console.log(`length: ${game.letters.length}`);
        // game.letters.splice(randNum, 1);
        // console.log(`length: ${game.letters.length}`);
        // console.log(`=====================================================`);

    }
    // console.log(playerLetters)
    // console.log(game.letters)
}

const drawLetter = () => {
}

const pickLetter = num => {
    if (game.letters[randNum].quantity > 0) {
        const letter = {
            letter: game.letters[randNum].letter,
            points: game.letters[randNum].points
        };
        playerLetters.push(letter);
        game.letters[randNum].quantity--;
    } else {
        
    }
}

$('.goal').droppable({
    accept: '.letter',
    drop: () => {
        console.log('POOP')
    }
});

game.letters.forEach(letterTile => {
    $('body').append(`<div class="letter"><p>${letterTile.letter}<p></div>`)
})

$('.letter').draggable({
    snap: true,
    stop: (event, ui) => {
        console.log(event.target)
        console.log(ui)
    }
});

getPlayerLetters();

