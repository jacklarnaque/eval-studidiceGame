/* to do list :
create backgroud image, animation, and inputs */

const buttonStart = document.getElementById('button')
const diceLoader = document.getElementById('centering')

/* const diceLoader = document.getElementById('centering') */
function start() {
    if (diceLoader.style.display == "none") {
        diceLoader.style.display = ''
    }
}
function changePage


buttonStart.addEventListener('event', () => {
    start();
    changePage()
});
