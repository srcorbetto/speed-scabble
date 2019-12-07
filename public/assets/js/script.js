let game = {
    letters: [
        {
            letter: '?',
            quantity: 2,
            points: 0
        },
        {
            letter: 'e',
            quantity: 12,
            points: 1
        },
        {
            letter: 'a',
            quantity: 9,
            points: 1
        },
        {
            letter: 'o',
            quantity: 8,
            points: 1
        },
        {
            letter: 'n',
            quantity: 6,
            points: 1
        },
        {
            letter: 'r',
            quantity: 6,
            points: 1
        },
        {
            letter: 't',
            quantity: 6,
            points: 1
        },
        {
            letter: 'l',
            quantity: 4,
            points: 1
        },
        {
            letter: 's',
            quantity: 4,
            points: 1
        },
        {
            letter: 'u',
            quantity: 4,
            points: 1
        },
        {
            letter: 'd',
            quantity: 4,
            points: 2
        },
        {
            letter: 'g',
            quantity: 3,
            points: 2
        },
        {
            letter: 'b',
            quantity: 2,
            points: 3
        },
        {
            letter: 'c',
            quantity: 2,
            points: 3
        },
        {
            letter: 'm',
            quantity: 2,
            points: 3
        },
        {
            letter: 'p',
            quantity: 2,
            points: 3
        },
        {
            letter: 'f',
            quantity: 2,
            points: 4
        },
        {
            letter: 'h',
            quantity: 2,
            points: 4
        },
        {
            letter: 'v',
            quantity: 2,
            points: 4
        },
        {
            letter: 'w',
            quantity: 2,
            points: 4
        },
        {
            letter: 'y',
            quantity: 2,
            points: 4
        },
        {
            letter: 'k',
            quantity: 1,
            points: 5
        },
        {
            letter: 'j',
            quantity: 1,
            points: 8
        },
        {
            letter: 'x',
            quantity: 1,
            points: 8
        },
        {
            letter: 'q',
            quantity: 1,
            points: 10
        },
        {
            letter: 'z',
            quantity: 1,
            points: 10
        }

    ],
    playersLetters: null,
    giveStartingLetters: null,

};

console.log(game);

$('.goal').droppable({
    accept: '.box',
    drop: () => {
        console.log('POOP')
    }
});

game.letters.forEach(letterTile => {
    for (i = 0; i < letterTile.quantity; i++) {
        $('body').append(`<div class="box"><p>${letterTile.letter}<p></div>`)
    }
})

$('.box').draggable({
    snap: true
});