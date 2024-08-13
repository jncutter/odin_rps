function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33) {
        return "rock";
    }
    else if (num > 0.33 && num < 0.66) {
        return "paper";
    }
    else return "scissors";
}

function getPlayerChoice() {
    let playerChoice = window.prompt("Rock, paper, or scissors?");
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;



function playRound(playerChoice, computerChoice) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        console.log("You both picked " + playerSelection + ". This round is a draw, try again.");
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You picked rock, and the computer picked paper. You lose, try again.");
        computerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You picked rock, and the computer picked scissors. You win! Try again.");
        playerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You picked paper, and the computer picked rock. You win! Try again.");
        playerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You picked paper, and the computer picked scissors. You lose, try again.");
        computerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You picked scissors, and the computer picked rock. You lose, try again.");
        computerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You picked scissors, and the computer picked paper. You win! Try again.");
        playerScore++;
        console.log("You: " + playerScore);
        console.log("Computer: " + computerScore);
    }

    else {
        console.log("That is not a valid response, please try again.");
    }
}

playRound();