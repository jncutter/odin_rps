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
const playSpace = document.getElementById("playspace");
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

function playRound(playerChoice) {
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
            
        if (playerSelection === computerSelection) {
            document.getElementById("roundresult").innerHTML = `You both picked ${playerSelection}. This round is a draw, try again.`;
        } 
        else if (playerSelection === "rock" && computerSelection === "paper") {
            document.getElementById("roundresult").innerHTML = "You picked rock, and the computer picked paper. You lose, try again.";
            computerScore++;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            document.getElementById("roundresult").innerHTML = "You picked rock, and the computer picked scissors. You win! Try again.";
            playerScore++;
        }
        
        else if (playerSelection === "paper" && computerSelection === "rock") {
            document.getElementById("roundresult").innerHTML = "You picked paper, and the computer picked rock. You win! Try again.";
            playerScore++;
        }
        
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            document.getElementById("roundresult").innerHTML = "You picked paper, and the computer picked scissors. You lose, try again.";
            computerScore++;
        }
        
        else if (playerSelection === "scissors" && computerSelection === "rock") {
            document.getElementById("roundresult").innerHTML = "You picked scissors, and the computer picked rock. You lose, try again.";
            computerScore++;
        }
        
        else if (playerSelection === "scissors" && computerSelection === "paper") {
            document.getElementById("roundresult").innerHTML = "You picked scissors, and the computer picked paper. You win! Try again.";
            playerScore++;
        }
}

function updateScore() {
    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("computerscore").innerHTML = computerScore;
}

function gameOver() {
    if (playerScore < 5 && computerScore < 5) {
        document.getElementById("gameresult").innerHTML = "";
        document.getElementById("newgame").innerHTML = "";
    }
    else if(playerScore = 5 && computerScore < 5) {
        document.getElementById("gameresult").innerHTML = "You win!";
        document.getElementById("newgame").innerHTML = "Refresh to start a new game.";
        playSpace.removeChild(rockButton);
        playSpace.removeChild(paperButton);
        playSpace.removeChild(scissorsButton);
    }
    else {
        document.getElementById("gameresult").innerHTML = "You lose.";
        document.getElementById("newgame").innerHTML = "Refresh to start a new game.";
        playSpace.removeChild(rockButton);
        playSpace.removeChild(paperButton);
        playSpace.removeChild(scissorsButton);
    }
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

document.getElementById("rock").addEventListener("click", () => {
    gameOver();
});

document.getElementById("paper").addEventListener("click", () => {
    gameOver();
});

document.getElementById("scissors").addEventListener("click", () => {
    gameOver();
});