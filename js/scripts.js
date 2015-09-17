var turn = 1;


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
        x_or_o = player(turn);
        debugger;
        this.position = position;
        this.x_or_o = x_or_o;
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
//     this.array = array;
//     this.winning_combos = winning_combos;

    //prototype for each array?

    //check for winner & display

        //once the Game detects a winning combo, no longer check for combos or accept any further input


    //clear spaces
        // turn 0 = null for all spaces?

    //reset turns
        // turn = 1;

// }
//why use prototype vs function?
    //A prototype is used for only an object
    //A function is used by the whole program
// Game.prototype.checkWin = function(player_array, win_array) {
//     var ordered_array = player_array.sort();
//     for(var i = 0; i <=ordered_array.length; i++) {
//         for(var q = 0; q = <=win_array.length; i++) {
//             if  (ordered_array[i] == win_array[q][0]) &&
//                 (ordered_array[i] == win_array[q][1]) &&
//                 (ordered_array[i] == win_array[q][2]) {
//                     return true;
//             } else {
//                 return false;
//             }
//         }
//     }
// };
