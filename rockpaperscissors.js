function getComputerChoice() {
    // let x be random number between 0 to 2;
    let randNum = Math.floor(Math.random() * 3);
    // if x === 0, return "Rock"; else if x === 1, return "Scissors"; else return "Paper"
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "scissors";
    } else return "paper";
}

let playerSelection;
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
        alert(`Computer chose ${computerSelection}. You won!`);
        playerScore++;
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        alert(`Computer chose ${computerSelection}. You lost!`)
        computerScore++;
        return "lose";
    } else {
        alert(`Computer chose ${computerSelection}. It's a tie!`)
        return "tie";
    }
}
// console.log(playRound(playerSelection, computerSelection))

function isGameOver() {
    if (playerScore + computerScore < 5) {
        return "no";
    } else {
        return "yes";
    }
}

function game() {
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    // Announce final score
    if (playerScore > computerScore) {
        alert(`You beat the computer ${playerScore} to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        alert(`You lost to the computer ${playerScore} to ${computerScore}!`)
    } else alert(`It's a tie of ${playerScore} to ${computerScore}!`);
}
game();
/*
    //Round 1

    //Get user to input their choice through a prompt
    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    // If return value contains "Win", add 1 to playerScore
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You win!`)
    // If return value contains "Lose", add 1 to computerScore
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lose!`)
    // Else announce tie
    } else alert(`Computer chose ${computerSelection}. It's a tie!`)
    console.log(playerScore, computerScore);

    //Round 2

    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You win!`)
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lose!`)
    } else alert(`Computer chose ${computerSelection}. It's a tie!`)
    console.log(playerScore, computerScore);

    //Round 3

    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You win!`)
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lose!`)
    } else alert(`Computer chose ${computerSelection}. It's a tie!`)
    console.log(playerScore, computerScore);

    //Round 4
    
    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You win!`)
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lose!`)
    } else alert(`Computer chose ${computerSelection}. It's a tie!`)
    console.log(playerScore, computerScore);

    //Round 5

    playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You win!`)
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lose!`)
    } else alert(`Computer chose ${computerSelection}. It's a tie!`)
    console.log(playerScore, computerScore);

    //Announce final score
    if (playerScore > computerScore) {
        alert(`You beat the computer ${playerScore} to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        alert(`You lost to the computer ${playerScore} to ${computerScore}!`)
    } else alert(`It's a tie of ${playerScore} to ${computerScore}!`);
}
*/

