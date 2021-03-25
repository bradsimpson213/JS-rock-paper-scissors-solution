export default class RPS {
    constructor(player = "player1"){
        this.player = player;
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.choices= ['rock', 'paper', 'scissors'];
        this.playerChoice = '';
        this.computerChoice = '';
    }

    updateGameStats(){
       const win = document.getElementById('wins');
       win.innerHTML = this.wins;
       const tie = document.getElementById('ties');
       tie.innerHTML = this.ties;
       const loss = document.getElementById('losses');
       loss.innerHTML = this.losses;
    }

    moveOutcome(){
        if (this.playerChoice === this.computerChoice){
            this.ties += 1;
            this.updateGameStats();
            return;
        };
        if ((this.playerChoice === "rock" && this.computerChoice === "scissors") ||
            (this.playerChoice === "scissors" && this.computerChoice === "paper") ||
            (this.playerChoice === "paper" && this.computerChoice === "rock")) {
                this.wins += 1;
                this.updateGameStats();
        } else {
                this.losses += 1;
            this.updateGameStats();
        };
    };

    computerMove(){
        const randomChoice = Math.floor(Math.random() * this.choices.length)
        this.computerChoice = this.choices[randomChoice];
        const computerImage = document.getElementById("computer-image");
        computerImage.src = `./images/${this.computerChoice}.png`;
        const computerChoiceName = document.getElementById("computer-choice");
        // getting choice name to capitalcase
        computerChoiceName.innerHTML = this.computerChoice.charAt(0).toUpperCase() + this.computerChoice.slice(1);
        this.moveOutcome();
    };

    playerMove(choice){
        this.playerChoice = choice;
        const playerImage = document.getElementById("player-image");
        playerImage.src = `./images/${this.playerChoice}.png`;
        this.computerMove();
    };

    resetStats(){
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.playerChoice = '';
        this.computerChoice = '';
        this.updateGameStats();
    };

};