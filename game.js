// Return random number between 1 and 3.
function randomBetweenInterval(min = 1, max = 3){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Match random number with rock, paper or scissors.
function computerPlay(){
    let randomNumber = randomBetweenInterval();
    if (randomNumber === 1){
        return "Rock";
    } else if (randomNumber === 2){
        return "Paper";
    } else return "Scissors";
}

// Play a single round of the game.
// Take player selection and computer selection as parameters.
// Return message that declares the winner.
function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return("Tie!");
        } else if (computerSelection == "paper"){
            return("You Lose! Paper beats Rock.");
        } else{
            return ("You Win! Rock beats Scissors.");
        }
    } 
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return("You Win! Paper beats Rock.");
        } else if (computerSelection == "paper"){
            return("Tie!");
        } else{
            return ("You Lose! Scissors beats Paper.");    
        }
    }
    else{
        if (computerSelection == "rock"){
            return("You Lose! Rock beats Scissors.");
        } else if (computerSelection == "paper"){
            return("You Win! Scissors beats Paper");
        } else return ("Tie!");
    }
}

// Play game for 5 rounds.
function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Selecet your move: Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        
        if (result.toLowerCase().charAt(0)!="t"){ // t if tie.
            let status = result.toLowerCase().charAt(4); // w if win, l if lose.
            if (status=="w"){
                playerScore++;
            } else computerScore++;
        }
        console.log("player (" + playerScore + ") - (" + computerScore + ") computer");
    }

    if (playerScore>computerScore){
        console.log("Winner: Player!");
    } else if (playerScore===computerScore){
        console.log("Tie!");
    } else console.log("Winner: Computer!");
}
