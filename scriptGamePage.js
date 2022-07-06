
// the code below is to get the players names from the prompt of the pagePlay.html:
const urlParams = new URLSearchParams(window.location.search);
const getQueryParams = (params, url) => {
    let href = url;
    // this is an expression to get query strings
    let regexp = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
    let qString = regexp.exec(href);
    return qString ? qString[1] : null;
  };
  
  let player1 = getQueryParams('player1', window.location);
  let player2 = getQueryParams('player2', window.location);

//the code below is to display the  global users scores
  document.getElementById('score1').innerHTML = `score global ${player1} = `
  document.getElementById('score2').innerHTML = `score global ${player2} = `


//we begin the algo for the dice game
// function to pick a random number betwin 1 to 6
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  // we now get the 
  // we need to get the variables necessary :
  let roll = document.getElementById()



