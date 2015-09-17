describe ('player', function() {
// user inputs something that its returns that input ( x or o)
    it('returns x on first turn', function() {
        expect(player(1)).to.eql('x')
    });

// input to alternate between x and o
    it('returns o on second turn', function() {
        expect(player(2)).to.eql('o')
    });

    it('returns o on second-to-last turn', function() {
        expect(player(8)).to.eql('o')
    });
})

describe ('Space', function() {
//assign a value to a square
    it('is assigned a value based on the current turn', function() {
        var testSpace = new Space(1);
        testSpace.userChoice('x', 1);

        expect(testSpace.position).to.equal(1);
        expect(testSpace.x_or_o).to.equal('x');

        afterEach(function() {
            x_choice = [];
            o_choice = [];
        })
    })

// pushes the user-selected position to the appropriate array
    it('pushes the user-selected position to the appropriate array', function() {
        var testSpace = new Space(3);
        testSpace.userChoice('x', 3);

        expect(x_choice).to.eql([3]);

        afterEach(function() {
            x_choice = [];
            o_choice = [];
        })
    })
})
// describe ('Game', function() {
// //once more 3 or turns have passed check if winning combo has been input
//     it('checks the x array for a winning combo of positions', function() {
//     var x_choice = [1, 2, 4, 7, 9];
//     testGame = new Game (x_choice, winning_combos);
//     testGame.checkWin(x_choice, winning_combos);
//
//         expect(testGame.checkWin).to.equal(true);
//     })
// })

//
// if all spaces have input but no winning combo then clear the board and start again
//
// input must be thee of the same players input if 3 match to be considerd a win
//
// if no combo found keep inputing
//
// if winning match found clear board, and send new screen to print certif
//
//
// for each combo in array check to see if the frist index equals a winning combo then award a win to the proper team
//
//
//
//
//
//
//
//
// if (first_input === 1)
//   // keep checking for winning combo
// } else {
//   // next players turn
// }
//
//
// if
