var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardTwo===cardFour){
  //alert('You found a match!')
//}
//else {
  //alert('Sorry, try again.')
//}

var board = document.getElementById('game-board');
function createBoard() {
  for (i=0; i < card.Length; i++) {
    var cardAdd = document.createElement('div');
    cardAdd.className = 'card';
    board.appendChild('cardAdd');
  }
}
