// YOUR CODE HERE
import RPS from './RPS.js';



document.addEventListener("DOMContentLoaded", () => {

    const game = new RPS();

    game.computerMove()
    console.log(game.computerChoice)



});