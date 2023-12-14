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

function playRound(playerSelection, computerSelection) {
    // your code here!
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "lose";
        } else if (computerSelection === "scissors") {
            return "win";
        } return;
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "win"
        } else if (computerSelection === "scissors") {
            return "lose";
        } return;
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win"
        } else if (computerSelection === "scissors") {
            return "lose"
        } return;
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
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

    //Round 3

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

    //Round 4
    
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

    //Round 5

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

    //Announce final score
    if (playerScore > computerScore) {
        alert(`You beat the computer ${playerScore} to ${computerScore}!`)
    } else if (computerScore > playerScore) {
        alert(`You lost to the computer ${playerScore} to ${computerScore}!`)
    } else alert(`It's a tie of ${playerScore} to ${computerScore}!`);
}
game()
