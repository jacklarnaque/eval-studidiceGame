setTimeout(function () {
    const diceLoader = document.getElementById('centering');
    diceLoader.hidden = "true";
}, 3000);



// Get the players ID's :
const buttonPlayer1 = document.getElementById('promptPlayer1');
const buttonPlayer2 = document.getElementById('promptPlayer2');
const startButton = document.getElementById('startButton');
const buttonAnnonymous = document.getElementById('annonymousGame');
// the '?' is the end of the URL  et debut de  definition of the parameters of url
//we hide the start button here then the user can't start a game without the correct players informations(named or anonymous)
startButton.hidden = true; 

// We here get the variables created into the URL with the method window.location.href
startButton.addEventListener("click", () => {
    window.location.href = 'pagePlay.html?player1=' + answer + '&player2=' + answer2;
})
// if the user want to use the anonymous button , then we use the same method but replace the varibles by pure Text
buttonAnnonymous.addEventListener("click", () => {
window.location.href = 'pagePlay.html?player1=' + "player1" + '&player2=' + "player2";
})

let answer = '';
let answer2 = '';

buttonPlayer1.addEventListener("click", () => {
    answer = prompt("entrez le nom du joueurs 1")
    if (answer.length > 10) {
        alert('Saisie incorrecte, le nom du joueur ne doit pas dépassé 10 caractères!');
    } else {
        buttonPlayer1.innerHTML = answer;
    }
});
let joueur2 = buttonPlayer2.addEventListener("click", () => {
    answer2 = prompt("entrez le nom du joueurs 2")
    if ((answer2.length > 10)) {
        alert('Saisie incorrecte, le nom du joueur ne doit pas dépassé 10 caractères!');
    } else {
        buttonPlayer2.innerHTML = answer2;
        startButton.hidden = false;
        return answer2
    }
})



