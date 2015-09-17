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


describe ('Game', function() {
//once more 3 or turns have passed check if winning combo has been input
    it('checks the x array for a winning combo of positions', function() {
    var x_choice = [1, 2, 4, 7, 9];
    var turn = 5;
    var testGame = new Game (x_choice, winning_combos, turn);

        expect(testGame.checkWin(x_choice, winning_combos)).to.equal(true);
    })

//handles ties
    it('alerts the user if all spaces are full on turn 9', function() {
        var x_choice = [2, 3, 4, 5, 9];
        var o_choice = [1, 6, 7, 8];
        var turn = 9;
        var testGame = new Game (x_choice, winning_combos, turn);

            expect(testGame.checkWin(x_choice, winning_combos)).to.equal(true);
    })
//clears board after win or tie
//     it('removes x_or_o values for all spaces')
//
//     expect(testGame.clearBoard).to.equal()
})

// if winning match found clear board, and send new screen to print certif
