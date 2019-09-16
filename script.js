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
    if (playerScore == 3) {
        para.textContent = "You win! You have bested the computer in 3 games! Please refresh the window."
    } else if (computerScore == 3) {
        para.textContent = "You lose! The computer has won 3 games! Try again next time! Please refresh the window."
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
    if (playerScore == 3 || computerScore == 3) endGame();
};

const plays = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", gameRound);
}


/*

};

*/



/*

function intro() {
    console.log("Welcome to Rock Paper Scissors! \nThis game will be played between these alerts and the logs in the browser's console.");
    alert("Welcome to Rock Paper Scissors! \nThis game will be played between these alerts and the logs in the browser's console.");
    console.log("You will be playing against the computer. First player to win 3 rounds wins the game. \n\nGood luck!");
    alert("You will be playing against the computer. First player to win 3 rounds wins the game. \n\nGood luck!")
}

//Player Input function to validate data entry
function playerInput() {
    let text = null;
    while (true) {
        console.log("Please type your action for this turn - ROCK, PAPER or SCISSORS:");
        text = prompt("Please type your action for this turn - ROCK, PAPER or SCISSORS:");
        if (text == null) {
            console.log("You must type either ROCK, PAPER, or SCISSORS");
            alert("You must type either ROCK, PAPER, or SCISSORS");
        }
        else {
            let newText = text.toUpperCase();
            if (plays.indexOf(newText) != -1) {
                return newText;
            }
            else {
                console.log("You must type either ROCK, PAPER, or SCISSORS");
                alert("You must type either ROCK, PAPER, or SCISSORS");
            }
        }
    }
}

//The floor and random portion returns a number between 0 and 2. 
//This number is used as the chosen "plays" index for the CPU play.
function computerPlay() {
    return plays[Math.floor(Math.random() * 3)];
}

//A simple switch to check if the player has won the game, or tied.
//Otherwise, it defaults to the player losing.
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection == plays[0] && computerSelection == plays[2]):
        case (playerSelection == plays[1] && computerSelection == plays[0]):
        case (playerSelection == plays[2] && computerSelection == plays[1]):
            return 1;
            break;
        case (playerSelection == computerSelection):
            return 2;
            break;
        default:
            return 0;
    }
}

const plays = ["ROCK", "PAPER", "SCISSORS"];
game();


function game() {
    intro();
    let cpuWin = 0;
    let playerWin = 0;
    let playerChoice;
    let computerChoice;
    while ((cpuWin < 3) && (playerWin < 3)) {
        playerChoice = playerInput();
        console.log(playerChoice);
        computerChoice = computerPlay();
        switch (playRound(playerChoice, computerChoice)) {
            case 0: console.log("You lose! " + computerChoice + " beats " + playerChoice + "!");
                alert("You lose! " + computerChoice + " beats " + playerChoice + "!");
                cpuWin++;
                break;
            case 1: console.log("You win! " + playerChoice + " beats " + computerChoice + "!");
                alert("You win! " + playerChoice + " beats " + computerChoice + "!");
                playerWin++;
                break;
            case 2: console.log("Draw! Both player selected " + playerChoice + "!");
                alert("Draw! Both players selected " + playerChoice + "!");
        }
        alert("Current score: \n\nPlayer: " + playerWin + "\nComputer: " + cpuWin);
        console.log("Current score: \n\nPlayer: " + playerWin + "\nComputer: " + cpuWin);
    }
    if (cpuWin == 3) {
        console.log("You lose! The computer has won 3 games! Try again next time!");
        alert("You lose! The computer has won 3 games! Try again next time!");
    }
    else if (playerWin == 3) {
        console.log("You win! You have bested the computer in 3 games!");
        alert("You win! You have bested the computer in 3 games!");
    }
    console.log("Please refresh the window if you want to play a new game.");
    alert("Please refresh the window if you want to play a new game.");
}
*/