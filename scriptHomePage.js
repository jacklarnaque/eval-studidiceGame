/* to do list :
create backgroud image, animation, and inputs */
setTimeout(function () {
    const diceLoader = document.getElementById('centering');
    diceLoader.hidden = "true";
}, 2000)

// Get the players ID's :
let buttonPlayer1 = document.getElementById('promptPlayer1');
let buttonPlayer2 = document.getElementById('promptPlayer2');
let buttonAnnonymous = document.getElementById('annonymousGame');

//!! ALERT ASK !! event for prompt user, should ask to a studi teacher why the 'typof answer !== 'string' allow the numbers from the user response
buttonPlayer1.addEventListener("click", (e => {
    let answer = prompt("entrez le nom du joueurs 1")
    if (typeof answer !== 'string') {
        alert('Saisie incorrecte')
    } else {
        buttonPlayer1.innerHTML = answer;
     }
}));

buttonPlayer2.addEventListener("click", (e => {
    let answer = prompt("entrez le nom du joueurs 2")
    if (typeof answer !== 'string') {
        alert('Saisie incorrecte')
    } else {
        buttonPlayer2.innerHTML = answer
    }
}));

buttonAnnonymous.addEventListener("click", (e => {
    URL
}));