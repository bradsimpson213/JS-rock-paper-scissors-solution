// YOUR CODE HERE
import RPS from './RPS.js';

window.addEventListener("DOMContentLoaded", () => {

    const game = new RPS();

// Event listener on the button container, will use bubbling and event.target.id
// to determine which button is clicked
    document
        .querySelector(".button-container")
        .addEventListener("click", (event) => {
// starts the fade out animation on images for player and computer
            const playerImage = document.getElementById('player-image');
            const computerImage = document.getElementById('computer-image');
            playerImage.classList.add('fade-out');
            computerImage.classList.add('fade-out');
            playerImage.classList.remove('fade-in');        
            computerImage.classList.remove('fade-in');

            const choice = event.target.id.split('-')[0];

            const wait = setTimeout(() =>  game.playerMove(choice), 2000);
            // game.playerMove(choice);
        
    });

// Event listenor on the game controls container to call resetStats 
    document
        .getElementById('reset-button')
        .addEventListener('click', () => {
            game.resetStats();
    
    });
});