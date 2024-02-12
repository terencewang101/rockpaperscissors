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
    // playerSelection = prompt("Choose between rock, paper, or scissors!", "").toLowerCase();
    if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        alert(`Computer chose ${computerSelection}. You won! 
        Your score is ${playerScore}, computer's score is ${computerScore}`);
        return "win";
    } else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "scissors" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        alert(`Computer chose ${computerSelection}. You lost! 
        Your score is ${playerScore}, computer's score is ${computerScore}`)
        return "lose";
    } else {
        alert(`Computer chose ${computerSelection}. It's a tie! 
        Your score is ${playerScore}, computer's score is ${computerScore}`)
        return "tie";
    }
}

/*function isGameOver() {
    if (playerScore + computerScore < 5) {
        return "no";
    } else {
        return "yes";
    }
}
*/

const scissors = document.querySelector("#scissors-button")
scissors.addEventListener("click", () => {
    playerSelection == "scissors";
    playRound(playerSelection, computerSelection);
})

const paper = document.querySelector("#paper-button")
paper.addEventListener("click", () => {
    playerSelection == "paper";
    playRound(playerSelection, computerSelection);
})

const rock = document.querySelector("#rock-button")
rock.addEventListener("click", () => {
    playerSelection == "rock";
    playRound(playerSelection, computerSelection);
})

function game() {
/*    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
*/
    // Announce final score
    if (playerScore > computerScore) {
        alert(`You beat the computer ${playerScore} to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        alert(`You lost to the computer ${playerScore} to ${computerScore}!`)
    } else if (computerScore == playerScore && (computerScore + playerScore !== 0)) {
        alert(`It's a tie of ${playerScore} to ${computerScore}!`);
    } else return;
}
game();

