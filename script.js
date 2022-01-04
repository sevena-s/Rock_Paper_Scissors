let playerScore = 0;
let compScore = 0;

function computerPlay (){
    let num = Math.floor(Math.random() * 3);
    const array = ["rock", "paper", "scissors"];
    return (array[num]);
}

function play (playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    console.log("Player:",player);
    console.log("Computer:",computerSelection);

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

    playerScore = 0;
    compScore = 0;
    for(let i = 0; i < 5; i++){
        const player = prompt("Enter Rock, Paper or Scissors!");
        const computer = computerPlay();
        console.log("ROUND ",(i+1));
        console.log(play(player,computer));
        console.log("Player Score:",playerScore,"Computer Score:",compScore);
        console.log("\n");
    }

    console.log("\n");
    console.log("FINAL RESULTS:")
    if(playerScore > compScore){
        console.log("YOU WIN!!!");
    }
    else if(playerScore < compScore){
        console.log("YOU LOSE!!!");
    }
    else{
        console.log("Its a Tie!!!");
    }
    

}

game();