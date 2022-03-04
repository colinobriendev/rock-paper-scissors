// get player selection
// get computer selection
// generate result

let playerSelection;
let computerSelection = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let updateText = document.getElementById('updates');
let buttons = document.querySelectorAll(".button");

function getComputerSelection(computerSelection) {
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    if
    (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        playerScore++
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        // wait for a click choice
    }
}

function fadeInText(textStr) {
    updateText.textContent = '';
    updateText.style.opacity = 0;
    updateText.textContent = textStr;
    setTimeout(function() {
        updateText.classList.add("fade-in");
    }, 300);
}

// start of game
fadeInText('Best of 5 rounds, choose your weapon!')