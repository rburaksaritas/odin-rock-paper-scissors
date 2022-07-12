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

let playerScore = 0;
let computerScore = 0;

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
            computerScore++;
            return("You Lose! Paper beats Rock.");
        } else{
            playerScore++;
            return ("You Win! Rock beats Scissors.");
        }
    } 
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            playerScore++;
            return("You Win! Paper beats Rock.");
        } else if (computerSelection == "paper"){
            return("Tie!");
        } else{
            computerScore++;
            return ("You Lose! Scissors beats Paper.");    
        }
    }
    else{
        if (computerSelection == "rock"){
            computerScore++;
            return("You Lose! Rock beats Scissors.");
        } else if (computerSelection == "paper"){
            playerScore++;
            return("You Win! Scissors beats Paper");
        } else return ("Tie!");
    }
}

// Play game for 5 rounds.
function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Selecet your move: Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("player (" + playerScore + ") - (" + computerScore + ") computer");
    }
    if (playerScore>computerScore){
        console.log("Winner: Player!");
    } else if (playerScore===computerScore){
        console.log("Tie!");
    } else console.log("Winner: Computer!");
}
