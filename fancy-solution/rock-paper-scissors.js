// YOUR CODE HERE
import RPS from './RPS.js';

window.addEventListener("DOMContentLoaded", () => {

    const game = new RPS();

// Event listener on the button container, will use bubbling and event.target.id
// to determine which button is clicked
    document
        .querySelector(".button-container")
        .addEventListener("click", (event) => {

            const playerImage = document.getElementById('player-image');
            playerImage.classList.remove('fade-in')
            playerImage.classList.add('fade-out')
            const computerImage = document.getElementById('computer-image')
            computerImage.classList.remove('fade-in')
            computerImage.classList.add('fade-out')

            const choice = event.target.id.split('-')[0];

            const wait = setTimeout(() =>  game.playerMove(choice), 2000)
            // game.playerMove(choice);
        
    });

// Event listenor on the game controls container to call resetStats 
    document
        .querySelector('.game-controls')
        .addEventListener('click', () => {
            game.resetStats();
    
    });
});