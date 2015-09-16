var turn = 4;


var values = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
var positions = [1, 2, 3,
                 4, 5, 6,
                 7, 8, 9]
var x_choice = [];  //takes the position of the values x; used for checking wins
var o_choice = [];  //takes the position of the values o
var winning_combos = [123, 456, 789, 147, 258, 369, 159, 357]

//rotates between x and o based on turn
    var player = function(turn) {
        for (var i = 0; i<turn; i++){
            var result =  values[i];
        }
        return result;
    }

//links the user-selected position to the current value of the current turn (either x or o)
    function Space (position, x_or_o) {
        // debugger;
        this.position = position;
        this.x_or_o = player(turn);

//set default value to null or empty string
    // if((x_or_o == 'x') || (x_or_o == 'o')){
    // this.x_or_o = '';
    // console.log(x_or_o);
    // } else {
    //     this.x_or_o = '';
}

// Space pushes value to array
    Space.prototype.userChoice = function(x_or_o, position) {

        if (x_or_o = 'x' ){
            x_choice.push(position);
        } else {
            o_choice.push(position);
        }
    }


// function Game (array, winning_combos) {
//
// }

// player pushes value to space



//var game = empties all values from all spaces
    //check for winner
    //once the Game detects a winning combo, no longer check for combos or accept any further input
    //display winner
    //reset space values
    //reset turns
