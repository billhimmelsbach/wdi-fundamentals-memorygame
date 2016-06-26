//Previous code before JavaScript implementation
//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
//if (cardTwo===cardFour){
  //alert('You found a match!')
//}
//else {
  //alert('Sorry, try again.')
//}

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i < cards.length; i++) {
    var cardAdd = document.createElement('div');
    cardAdd.className = 'card';
    cardAdd.setAttribute('data-card', cards[i]);
    cardAdd.addEventListener('click', isTwoCards);
    board.appendChild(cardAdd);
    board.appendChild(cardAdd);
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='king.png'>";
  }
    else {
      this.innerHTML = "<img src='queen.png'>";
    }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match! AMAZING!");
  }
  else {
    alert("Sorry, try again. SO CLOSE!");
  }
}

createBoard();
