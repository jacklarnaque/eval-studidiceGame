setTimeout(function () {
    const diceLoader = document.getElementById('centering');
    diceLoader.hidden = "true";
}, 1000);
// function to pick a random number betwin 1 to 6
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
//insert in the dom element via js to display the score :

/* let score1P = document.createElement('p');
score1P.innerHTML = ${result};
let score1 = document.getElementById('score1');
score1.appendChild(score1P); */

//algo dices game //
let throwDices = document.getElementById("lancer")
let playerTurnDiceButton = document.getElementById("throw")


playerTurnDiceButton.addEventListener('click', () => {
    let n = getRandomInt(1, 7)

})


  