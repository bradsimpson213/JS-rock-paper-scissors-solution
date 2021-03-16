export default class RPS {
    constructor(player = "player1"){
        this.player = player;
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.choices= ['Rock', 'Paper', 'Scisscors'];
        this.playerChoice = '';
        this.computerChoice = '';
    }

    playerMove(choice){

    }

    computerMove(){
        const randomChoice = Math.floor(Math.random() * this.choices.length)
        this.computerChoice = this.choices[randomChoice];
    }

    moveOutcome(){

    }

    resetStats(){
        this.wins = 0;
        this.ties = 0;
        this.losses = 0;
        this.playerChoice = '';
        this.computerChoice = '';
    }

}