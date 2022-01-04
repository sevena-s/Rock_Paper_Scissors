let playerScore = 0;
let compScore = 0;

function computerPlay (){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return ("rock");
    }
    else if(num == 1){
        return ("paper");
    }
    else{
        return ("scissors");
    }
}

function play (playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();

    if(player == computerSelection){
        return ("Draw");
    }
    else if(player == "rock"){
        if(player > computerSelection){
            return("You Lose Paper Beats Rock!");
        }
        else{
            return("You Win Rock Beats Scissors!");
        }
    }
    else if(player == "paper"){
        if(player < computerSelection && computerSelection == "rock"){
            return("You Win Paper Beats Rock!");
        }
        else{
            return("You Lose Scisscors beats Paper!");
        }
    }
    else{
        if(player > computerSelection && computerSelection == "rock"){
            return("You Lose Rock Beats Scissors!");
        }
        else{
            return("You Win Scissors beats Paper!");
        }
    }
}

function game(){
    let player = prompt("Enter Rock, Paper or Scissors!");
    

}

const player = "scissors";
const computer = computerPlay();
console.log(player);
console.log(computer);
console.log(play(player,computer));
game();