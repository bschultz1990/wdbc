const p1Plus = document.querySelector('#p1Plus');
const p1Minus = document.querySelector('#p1Minus');
const p1Display = document.querySelector('#p1Display');

const p2Plus = document.querySelector('#p2Plus');
const p2Minus = document.querySelector('#p2Minus');
const p2Display = document.querySelector('#p2Display');

const reset = document.querySelector('#reset');

let p1Score = 0;
let p2Score = 0;


// PLAYER 1
p1Plus.addEventListener('click', function(e) {
  ++p1Score;
  p1Display.innerHTML = p1Score;
  winnerCheck();
})

p1Minus.addEventListener('click', function(e) {
  --p1Score;
  p1Display.innerHTML = p1Score;
  winnerCheck();
})


// PLAYER 2
p2Plus.addEventListener('click', function(e) {
  ++p2Score;
  p2Display.innerHTML = p2Score;
  winnerCheck();
})

p2Minus.addEventListener('click', function(e) {
  --p2Score;
  p2Display.innerHTML = p2Score;
  winnerCheck();
})

// RESET
reset.addEventListener('click', function(e) {
  p1Score = 0;
  p1Display.innerHTML = p1Score;
  p1Display.classList.remove('winner');
  p1Display.classList.remove('loser');

  p2Score = 0;
  p2Display.innerHTML = p2Score;
  p2Display.classList.remove('winner');
  p2Display.classList.remove('loser');
  enableButtons();
})


function winnerCheck() {
  let gameCounter = document.querySelector('#gameCounter').valueAsNumber; // Returns a number.
  if (p1Score == gameCounter) {
    p1Display.classList.add('winner');
    p2Display.classList.add('loser');
    disableButtons();

  } else if (p2Score == gameCounter) {
    p2Display.classList.add('winner');
    p1Display.classList.add('loser');
    disableButtons();
  }
}

function disableButtons() {
  p1Plus.disabled = true; // Disable the score buttons.
  p1Minus.disabled = true;
  p2Plus.disabled = true;
  p2Minus.disabled = true;
}

function enableButtons() {
  p1Plus.disabled = false; // Enable the score buttons.
  p1Minus.disabled = false;
  p2Plus.disabled = false;
  p2Minus.disabled = false;
}
