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
        return ("Its a Draw!");
    }
    else if(player == "rock"){
        if(player > computerSelection){
            compScore++;
            return("You Lose Paper Beats Rock!");
        }
        else{
            playerScore++;
            return("You Win Rock Beats Scissors!");
        }
    }
    else if(player == "paper"){
        if(player < computerSelection && computerSelection == "rock"){
            playerScore++;
            return("You Win Paper Beats Rock!");
        }
        else{
            compScore++;
            return("You Lose Scisscors beats Paper!");
        }
    }
    else{
        if(player > computerSelection && computerSelection == "rock"){
            compScore++;
            return("You Lose Rock Beats Scissors!");
        }
        else{
            playerScore++;
            return("You Win Scissors beats Paper!");
        }
    }
}

function game(){
    const player = prompt("Enter Rock, Paper or Scissors!");

    playerScore = 0;
    compScore = 0;
    for(let i = 0; i < 5; i++){
        const computer = computerPlay();
        console.log(play(player,computer));
    }
    

}

game();