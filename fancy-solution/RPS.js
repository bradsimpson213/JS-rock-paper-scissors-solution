export default class RPS {
    constructor(player = "player1"){
        this.player = player;
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.choices= ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        this.playerChoice = '';
        this.computerChoice = '';
        // check for saved moves in local storage, if so load them, if not set default values
        this.previousPlayerMoves = window.localStorage.getItem("moves") ? 
                    JSON.parse(window.localStorage.getItem("moves")) : 
                    { rock: 0, paper: 0, scissors: 0, lizard: 0, spock: 0 };
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

    tapInSmarterCPU(){
        /* this method checks the stored user moves, determines the most often 
           played user move and plays to win against that */
        /* Idea to make even smarter CPU, save nested objects to track what is the most likely next move to be played 
        after a given move */
        let mostProbableMove = '';
        let count = 0;
        const moves = this.previousPlayerMoves
        for (const key in moves) {
            if (moves[key] >= count){
                count = moves[key];
                mostProbableMove = key;
            }
        }
        switch (mostProbableMove) {
            case "rock": 
                this.computerChoice = "paper";
                break;
            case "paper":
                this.computerChoice = "lizard";
                break;
            case "scissors":
                this.computerChoice = "spock";
                break;
            case "lizard":
                this.computerChoice = "rock";
                break;
            case "spock":
                this.computerChoice = "scissors";
                break;
            default:
                this.computerChoice = "rock";
        }
        console.log(mostProbableMove)
    }

    computerMove(){
        // const randomChoice = Math.floor(Math.random() * this.choices.length)
        // this.computerChoice = this.choices[randomChoice];
        this.tapInSmarterCPU();
        const computerImage = document.getElementById("computer-image")
        computerImage.classList.remove("fade-out");
        computerImage.classList.add("fade-in")
        computerImage.src = `./assets/${this.computerChoice}.png`;
        const computerChoiceName = document.getElementById("computer-choice");
        // format the move into capital case
        computerChoiceName.innerHTML = this.computerChoice.charAt(0).toUpperCase() + this.computerChoice.slice(1);
        this.moveOutcome()
    };

    playerMove(choice){
        this.playerChoice = choice;
        this.previousPlayerMoves[this.playerChoice] ++;
        window.localStorage.setItem("moves", JSON.stringify(this.previousPlayerMoves))
        console.log(this.previousPlayerMoves);
        const playerImage = document.getElementById("player-image");
        playerImage.classList.remove("fade-out");
        playerImage.src = `./assets/${this.playerChoice}.png`;
        playerImage.classList.add("fade-in");
        const playerChoiceName = document.getElementById("player-choice");
        playerChoiceName.innerHTML = this.playerChoice.charAt(0).toUpperCase() + this.playerChoice.slice(1);
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