/* to do list : */
// set the script to switch to the game page straight after the both prompt done(players 1&2)
// has tro be responsive 
// start the game page with algo

setTimeout(function () {
    const diceLoader = document.getElementById('centering');
    diceLoader.hidden = "true";
}, 3000);



// Get the players ID's :
const buttonPlayer1 = document.getElementById('promptPlayer1');
const buttonPlayer2 = document.getElementById('promptPlayer2');
const startButton = document.getElementById('startButton');
const buttonAnnonymous = document.getElementById('annonymousGame');
// le ?  est la fin de lurl  et debut de  definition of the parameters of url
/* startButton.hidden = true; 
*/
startButton.addEventListener("click", () => {
    window.location.href = 'pagePlay.html?player1=' + answer + '&player2=' + answer2;
})
// ensuite on recupere les varibales creer dans l'url avec une methode spécifique
buttonAnnonymous.addEventListener("click", () => {
    window.location.href = 'pagePlay.html';
})


/* 
<---------------HELP FOR CUSTOM EVENT METHODO start------------------>

 ya.addEventListener("startTheGame", function (e) {
    ya.class
 });

 function changeText(n, c) {
     const event = new CustomEvent("startTheGame", {
         detail: {
             number: n,
             textColor: c

         }
     });

     ya.dispatchEvent(event);

 }
 <---------------CUSTOM EVENT METHODO end----------------------->
 */


let answer = '';
let answer2 = '';

buttonPlayer1.addEventListener("click", () => {
    answer = prompt("entrez le nom du joueurs 1")
    if (answer.length > 10) {
        alert('Saisie incorrecte, le nom du joueur ne doit pas dépassé 10 caractères!');
    } else {
        buttonPlayer1.innerHTML = answer;
        buttonAnnonymous.style.display = 'none';
    }
});
let joueur2 = buttonPlayer2.addEventListener("click", () => {
    answer2 = prompt("entrez le nom du joueurs 2")
    if ((answer2.length > 10)) {
        alert('Saisie incorrecte, le nom du joueur ne doit pas dépassé 10 caractères!');
    } else {
        buttonPlayer2.innerHTML = answer2;
        buttonAnnonymous.style.display = 'none';
        startButton.hidden = false;
        return answer2
    }
})



