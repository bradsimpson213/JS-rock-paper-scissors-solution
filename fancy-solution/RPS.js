export default class RPS {
    constructor(player = "player1"){
        this.player = player;
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.choices= ['rock', 'paper', 'scissors', 'lizard', 'spock'];
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
        if ((this.playerChoice === "rock" && 
                (this.computerChoice === "scissors" || this.computerChoice === "lizard")) ||
            (this.playerChoice === "scissors" && 
                (this.computerChoice === "paper" || this.computerChoice === "lizard")) ||
            (this.playerChoice === "paper" && 
                (this.computerChoice === "rock" || this.computerChoice === "spock")) ||
            (this.playerChoice === "spock" && 
                (this.computerChoice === "scissors" || this.computerChoice ==="rock")) ||
            (this.playerChoice === "lizard" && 
                (this.computerChoice === "spock" || this.computerChoice === "paper"))) {
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
        const computerImage = document.getElementById("computer-image")
        computerImage.classList.remove("fade-out");
        computerImage.classList.add("fade-in")
        computerImage.src = `./images/${this.computerChoice}.png`;
        const computerChoiceName = document.getElementById("computer-choice");
        computerChoiceName.innerHTML = this.computerChoice.charAt(0).toUpperCase() + this.computerChoice.slice(1);
        this.moveOutcome()
    };

    playerMove(choice){
        this.playerChoice = choice;
        const playerImage = document.getElementById("player-image");
        playerImage.classList.remove("fade-out");
        playerImage.src = `./images/${this.playerChoice}.png`;
        playerImage.classList.add("fade-in");
        this.computerMove()
        // const wait = setTimeout( () => this.computerMove(), 2000);
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