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

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let playerSelection;
let computerSelection;

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    roundsPlayed++;
    //playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You won! 
        Your score is ${playerScore}, computer's score is ${computerScore}`);
    } else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lost! 
        Your score is ${playerScore}, computer's score is ${computerScore}`)
    } else {
        alert(`Computer chose ${computerSelection}. It's a tie! 
        Your score is ${playerScore}, computer's score is ${computerScore}`)
    }
    announceResults();
}

const scissors = document.querySelector("#scissors-button")
scissors.addEventListener("click", () => {
    playRound("scissors", computerSelection);
})

const paper = document.querySelector("#paper-button")
paper.addEventListener("click", () => {
    playRound("paper", computerSelection);
})

const rock = document.querySelector("#rock-button")
rock.addEventListener("click", () => {
    playRound("rock", computerSelection);
})

function announceResults() {
    if (roundsPlayed > 5) {
        if (playerScore > computerScore) {
            alert(`You beat the computer ${playerScore} to ${computerScore}!`)
        } else if (computerScore > playerScore) {
            alert(`You lost to the computer ${playerScore} to ${computerScore}!`)
        } else if (computerScore == playerScore && (computerScore + playerScore !== 0)) {
            alert(`It's a tie of ${playerScore} to ${computerScore}!`);
        } else return;
    } else;
};

