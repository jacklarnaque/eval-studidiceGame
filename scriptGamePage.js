
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

let player1 = getQueryParams('player1', window.location);
let player2 = getQueryParams('player2', window.location);

//the code below is to display the  global users scores
document.getElementById('globalScore1').innerHTML = `score global ${player1} = `
document.getElementById('globalScore2').innerHTML = `score global ${player2} = `
document.getElementById('roundScore1').innerHTML = `Score Tour ${player1} = `
document.getElementById('roundScore2').innerHTML = `Score Tour ${player2} = `


//we begin the algo for the dice game

const firstRandomNum = Math.floor(Math.random()
  * 6) + 1

// we now get the 
// we need to get the variables necessary :
let rollDice = document.getElementById('roll');
let hold = document.getElementById('hold');
let displayTurnPlayer = document.getElementById('displayTurnPlayer');


let activePlayer, roundScore, globalScore, dice;

function start() {
  globalScore = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  document.getElementById('score1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';

}

//listners:
window.addEventListener('load', (player1, player2) => {
  displayTurnPlayer.innerHTML = `${player1} à votre tour de jouer!`
  displayTurnPlayer.innerHTML = `${player2} à votre tour de jouer!`
});


const firstDiceImg = 'img/imgDice/dice-' + firstRandomNum + '.png'
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImg)


let num = '';

rollDice.addEventListener('click', () => {
  firstRandomNum;

})
console.log(num)

// get elements necessary to buid our game
// create functions :
// lancer:


// code to change the im dice :
