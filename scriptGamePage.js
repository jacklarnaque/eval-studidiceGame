
// this is the dice loader (transition animation)
setTimeout(function () {
  const diceLoader = document.getElementById('centering');
  diceLoader.hidden = "true";
}, 1000);

// the code below is to get the players names from the prompt of the pagePlay.html:
const urlParams = new URLSearchParams(window.location.search);
const getQueryParams = (params, url) => {
  let href = url;
  // this is an expression to get query strings
  let regexp = new RegExp('[?&]' + params + '=([^&#]*)', 'i');
  let qString = regexp.exec(href);
  return qString ? qString[1] : null;
};

const player0 = getQueryParams('player1', window.location);
const player1 = getQueryParams('player2', window.location);
//we begin the algo for the dice game
// we need to get the variables necessary :

let activePlayer, roundScore, globalScore, dice, play = true;
let playAgain = document.getElementById('playAgain')
playAgain.hidden = true;
let gameRules = document.getElementById('rule')
let buttunRule = document.getElementById('buttonRules')
gameRules.hidden = true
//TO DO : need to do a button who display and hide the rules of the game
buttunRule.addEventListener("click", function() {
  if(gameRules.hidden = true) {
    gameRules.hidden = false
  }
})
function start() {
  globalScore = [0,0];
  roundScore = 0;
  activePlayer = 0;
  //display players names
  document.getElementById('displayTurnPlayer0').textContent = player0;
  document.getElementById('displayTurnPlayer1').textContent = player1;
  //display scores
  document.getElementById('globalScore0').textContent = '0';
  document.getElementById('roundScore0').textContent = '0';
  document.getElementById('globalScore1').textContent = '0';
  document.getElementById('roundScore1').textContent = '0';
}

start();

//listners:

//algo to display the good dices images:

document.getElementById('roll').addEventListener('click', function () {
  if (play) {
    let dice = Math.floor(Math.random() * 6) + 1;
    let firstDiceImg = 'img/imgDice/dice-' + dice + '.png'
    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg);

    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#roundScore' + activePlayer).textContent = roundScore;
    }
    else {
      nextRound();
    }
  }
});
/* now we should buid the hold button,by that we let the choice to the active player to keep going 
to play or to stop and add the roundscore into the global score */
document.getElementById('hold').addEventListener('click', function() {
  if (play) {
    globalScore[activePlayer] += roundScore;
    document.getElementById('globalScore' + activePlayer).textContent = globalScore[activePlayer];

    if (globalScore[activePlayer] >= 100) {
      playAgain.hidden = false
      if(activePlayer === 0) {
        document.getElementById('displayTurnPlayer' + activePlayer).textContent = player0 + ' a gagner!';
        play = false;
      } else if (activePlayer === 1) {
        document.getElementById('displayTurnPlayer' + activePlayer).textContent = player1 + ' a gagner!';
        play = false;
      }
    } else {
      nextRound();
    }
  }
});

function nextRound() {
  if (activePlayer === 0) {
    activePlayer = 1;
  }
  else {
    activePlayer = 0;
  }
  
  roundScore = 0;
  document.getElementById('roundScore0').textContent = '0';
  document.getElementById('roundScore1').textContent = '0';
}