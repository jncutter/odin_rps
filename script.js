function getComputerChoice() {
    let num = Math.random();
    if (num < 0.33) {
        return "Rock";
    }
    else if (num > 0.33 && num < 0.66) {
        return "Paper";
    }
    else return "Scissors";
}

function getPlayerChoice() {
    let playerChoice = window.prompt("Rock, paper, or scissors?");
}

getPlayerChoice();