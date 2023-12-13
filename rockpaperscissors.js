function getComputerChoice() {
    // let x be random number between 0 to 2;
    let x = Math.floor(Math.random() * 3);
    // if x === 0, return "Rock"; else if x === 1, return "Scissors"; else return "Paper"
    if (x === 0) {
        return "rock";
    } else if (x === 1) {
        return "scissors";
    } else return "paper";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else return "Rock and Rock means it's a tie!";
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "scissors") {
            return "You Lose! Rock beats Scissors";
        } else return "Scissors and Scissors means it's a tie!";
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else return "Paper and Paper means it's a tie!";
    }
  }
function game() {
    //
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));