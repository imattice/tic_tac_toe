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

function Game (array, winning_combos) {
    this.array = array;
    this.winning_combos = winning_combos;

    //handle ties

    //clear spaces
        // turn 0 = null for all spaces?

    //reset turns
        // turn = 1;

}

//why use prototype vs function?
    //A prototype is used for only an object
    //A function is used by the whole program
//compares user selections with winning combinations
    Game.prototype.checkWin = function(player_array, win_array, turn) {
        var ordered_array = player_array.sort();
        debugger;
        for(var i = 0; i <= ordered_array.length; i++) {
            for(var q = 0; q <= win_array.length; i++) {
                if (ordered_array[i] == win_array[q][0]){
                    if (ordered_array[i] == win_array[q][1]) {
                        if (ordered_array[i] == win_array[q][2]) {
                            alert('win');
                            return true;
                } else{
                    if (turn = 9){
                        alert ('tie')
                        return false;
                    } else {
                        turn++;
                        return false;
                    }
                }
                }
                }
            }
        }
    }


//////////////////////////////////// J QUERY //////////////////////////////////
// $(document).ready (function() {
//
// ///////////////////////////////////////////////////////////////////////////////
//   $( "#one" ).click(function() {
//   Game.userChoice (x_or_o, 1);
//   if (turn % 2 === 0 ) {
//       player_array = o_choice
//       var mark_one = "X"
//   }  else  {
//       player_array = x_choice
//       var mark_one = "O"
//   }
//   $( "#mustard" ).append( mark_one );
//   Game.checkWin(player_array, win_array, turn);
//   }
// });
//
// $( "#two" ).click(function() {
// Game.userChoice (x_or_o, 2);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_two = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#mayo" ).append( mark_two );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#three" ).click(function() {
// Game.userChoice (x_or_o, 3);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#cat-soup" ).append( mark_three );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#four" ).click(function() {
// Game.userChoice (x_or_o, 4);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#pickles" ).append( mark_four );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#five" ).click(function() {
// Game.userChoice (x_or_o, 5);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#bbq-sauce" ).append( mark_five );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#six" ).click(function() {
// Game.userChoice (x_or_o, 6);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#chalula" ).append( mark_six );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#seven" ).click(function() {
// Game.userChoice (x_or_o, 7);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#spicy-mustard" ).append( mark_seven );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
// $( "#eight" ).click(function() {
// Game.userChoice (x_or_o, 8);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#jam" ).append( mark_eight );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
//
// $( "#nine" ).click(function() {
// Game.userChoice (x_or_o, 9);
// if (turn % 2 === 0 ) {
//     player_array = o_choice
//     var mark_one = "X"
// }  else  {
//     player_array = x_choice
//     var mark_one = "O"
// }
// $( "#p-butta" ).append( mark_nine );
// Game.checkWin(player_array, win_array, turn);
// }
// });
//
//
// }); // from doc ready
