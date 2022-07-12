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
function round(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log(playerSelection + ", " + computerSelection);
    
    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return("Tie!");
        } else if (computerSelection == "paper"){
            return("You Lose! Paper beats Rock.");
        } else return ("You Win! Rock beats Scissors.");
    } 
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return("You Win! Paper beats Rock.");
        } else if (computerSelection == "paper"){
            return("Tie!");
        } else return ("You Lose! Scissors beats Paper.");
    }
    else{
        if (computerSelection == "rock"){
            return("You Lose! Rock beats Scissors.");
        } else if (computerSelection == "paper"){
            return("You Win! Scissors beats Paper");
        } else return ("Tie!");
    }
}
