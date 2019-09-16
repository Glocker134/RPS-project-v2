function computerPlay() {
    return plays[Math.floor(Math.random() * 3)];
}

function playRound(player, computer) {
    switch (true) {
        case (player == plays[0] && computer == plays[2]):
        case (player == plays[1] && computer == plays[0]):
        case (player == plays[2] && computer == plays[1]):
            return 1;
            break;
        case (player == computer):
            return 2;
            break;
        default:
            return 0;
    }
}

function resultUpdate(key, player, computer) {
    const para = document.getElementById("game-log");
    switch (key) {
        case 0:
            para.textContent = `You lose! ${computer} beats ${player}!`;
            break;
        case 1:
            para.textContent = `You win! ${player} beats ${computer}!`
            break;
        case 2:
            para.textContent = `Draw! Both players selected ${player}`;
    }
}

function updateComputerScore(score) {
    const para = document.getElementById("computer-score");
    para.textContent = score;
}

function updatePlayerScore(score) {
    const para = document.getElementById("player-score");
    para.textContent = score;
}

function endGame() {
    let para = document.getElementById("win-msg");
    if (playerScore == 5) {
        para.textContent = "You win! You have bested the computer in 5 games! Please refresh the window."
    } else if (computerScore == 5) {
        para.textContent = "You lose! The computer has won 5 games! Try again next time! Please refresh the window."
    }
    document.getElementById("ROCK").disabled = true;
    document.getElementById("PAPER").disabled = true;
    document.getElementById("SCISSORS").disabled = true;
}


function gameRound() {
    let computerSelection = computerPlay();
    switch (playRound(this.id, computerSelection)) {
        case 0:
            resultUpdate(0, this.id, computerSelection);
            computerScore++;
            updateComputerScore(computerScore);
            break;
        case 1:
            resultUpdate(1, this.id, computerSelection);
            playerScore++;
            updatePlayerScore(playerScore);
            break;
        case 2:
            resultUpdate(2, this.id, computerSelection);
    }
    if (playerScore == 5 || computerScore == 5) endGame();
};

const plays = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", gameRound);
}