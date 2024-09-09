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

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
            
        if (playerSelection === computerSelection) {
            document.getElementById("roundresult").innerHTML = `You both picked ${playerSelection}. This round is a draw, try again.`;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        } 
        else if (playerSelection === "rock" && computerSelection === "paper") {
            document.getElementById("roundresult").innerHTML = "You picked rock, and the computer picked paper. You lose, try again.";
            computerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            document.getElementById("roundresult").innerHTML = "You picked rock, and the computer picked scissors. You win! Try again.";
            playerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        
        else if (playerSelection === "paper" && computerSelection === "rock") {
            document.getElementById("roundresult").innerHTML = "You picked paper, and the computer picked rock. You win! Try again.";
            playerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            document.getElementById("roundresult").innerHTML = "You picked paper, and the computer picked scissors. You lose, try again.";
            computerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            document.getElementById("roundresult").innerHTML = "You picked scissors, and the computer picked rock. You lose, try again.";
            computerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
        
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            document.getElementById("roundresult").innerHTML = "You picked scissors, and the computer picked paper. You win! Try again.";
            playerScore++;
            console.log("You: " + playerScore);
            console.log("Computer: " + computerScore);
        }
}

function updateScore() {
    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("computerscore").innerHTML = computerScore;
}

document.getElementById("rock").addEventListener("click", () => {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors");
});

document.getElementById("rock").addEventListener("click", () => {
    updateScore();
});

document.getElementById("paper").addEventListener("click", () => {
    updateScore();
});

document.getElementById("scissors").addEventListener("click", () => {
    updateScore();
});
