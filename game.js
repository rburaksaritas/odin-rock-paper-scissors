// Return random number between 1 and 3.
function randomBetweenInterval(min = 1, max = 3){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Match random number with rock, paper or scissors.
function computerPlay(){
    let randomNumber = randomBetweenInterval();
    console.log(randomNumber);
    if (randomNumber === 1){
        return "Rock";
    } else if (randomNumber === 2){
        return "Paper";
    } else return "Scissors";
}

