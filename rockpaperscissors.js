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

