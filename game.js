// Returns a random number between 1 and 3.
function randomBetweenInterval(min = 1, max = 3){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Matches the random number with rock, paper or scissors.
function computerPlay(){
    let randomNumber = randomBetweenInterval();
    if (randomNumber === 1){
        return "Rock";
    } else if (randomNumber === 2){
        return "Paper";
    } else return "Scissors";
}

// Plays a single round of the game.
// Takes player selection and computer selection as parameters.
// Returns message that declares the winner.
function playRound(playerSelection, computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock"){
        if (computerSelection == "rock"){
            return("Tie!");
        } else if (computerSelection == "paper"){
            return("You Lose! Paper beats Rock.");
        } else{
            return("You Win! Rock beats Scissors.");
        }
    } 
    else if (playerSelection == "paper"){
        if (computerSelection == "rock"){
            return("You Win! Paper beats Rock.");
        } else if (computerSelection == "paper"){
            return("Tie!");
        } else{
            return("You Lose! Scissors beats Paper.");    
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            return("You Lose! Rock beats Scissors.");
        } else if (computerSelection == "paper"){
            return("You Win! Scissors beats Paper");
        } else return("Tie!");
    }
    else return("Invalid input. Try again.")
}

// Plays game until one of the scores reaches 5.
function game(){
    let userName = initialize();
    let playerScore = 0;
    let computerScore = 0;

    let gameover = false;
        const buttons = document.querySelectorAll(".moveButton");
        buttons.forEach(button => button.addEventListener("click", function(){
            if (!gameover){
                let playerSelection = this.textContent;
                let computerSelection = computerPlay();
                updateSelectionInfo(playerSelection, computerSelection);
        
                let result = playRound(playerSelection, computerSelection);
                updateRoundResultMessage(result);
                console.log(result);

                if (result.toLowerCase().charAt(0)!="t"){ // t if tie.
                    let status = result.toLowerCase().charAt(4); // w if win, l if lose.
                    if (status=="w"){
                        playerScore++;
                    } else computerScore++;
                }

                console.log("player (" + playerScore + ") - (" + computerScore + ") computer");
                updateScoreboard(userName, playerScore, computerScore);
            
                if(playerScore==5 || computerScore==5){
                    gameover = true;
                    let gameResultMessage;
                    if (playerScore>computerScore){
                        console.log("Winner: Player!");
                        gameResultMessage = `Winner: ${userName}!`
                    } else if (playerScore===computerScore){
                        console.log("Tie!");
                    } else {
                        console.log("Winner: Computer!");
                        gameResultMessage = `Winner: Computer... Better luck next time!`
                    } 
                    displayResult(gameResultMessage);
                }
            }
        }));
    }

// Takes username input and modify scoreboard accordingly.
function initialize(){
    let userName = prompt("Enter your name:", "Player");
    const scoreboard = document.querySelector(".scoreboard");
    scoreboard.textContent = `${userName} 0 - 0 Computer`;
    return userName;
}

function updateScoreboard(userName, playerScore, computerScore){
    const scoreboard = document.querySelector(".scoreboard");
    scoreboard.textContent = `${userName} ${playerScore} - ${computerScore} Computer`;
    console.log(scoreboard.textContent);
}

function updateSelectionInfo(playerSelection, computerSelection){
    const playerSelectionInfo = document.querySelector(".player-selection");
    const computerSelectionInfo = document.querySelector(".computer-selection");
    playerSelectionInfo.textContent = `You picked: ${playerSelection}`;
    computerSelectionInfo.textContent = `You picked: ${computerSelection}`;
}

function updateRoundResultMessage(message){
    const roundMessage = document.querySelector(".round-message");
    roundMessage.textContent = message;
}

function getMove(){
    return this.textContent;
}

function displayResult(message){
    const result = document.createElement("p");
    result.textContent = message;
    const refreshMessage = document.createElement("p");
    refreshMessage.textContent = "Refresh page to play again."
    const body = document.querySelector("body");
    body.appendChild(result);
    body.appendChild(refreshMessage);
}

game();