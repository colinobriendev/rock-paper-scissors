// get player selection
// get computer selection
// generate result

let playerSelection;
let computerSelectionArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let playerScoreCount = document.getElementById('playerScoreDisplay');
let computerScoreCount = document.getElementById('computerScoreDisplay');
let updateText = document.getElementById('updates');
let imageArea = document.getElementById('pictures')
let buttons = document.querySelectorAll(".button");
let replayButton = document.getElementById('replay');

function getComputerSelection(computerSelection) {
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    if
    (
        playerSelection === 'rock' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'paper'
    ) {
        fadeInText('Tie round! You both selected ' + playerSelection);
    }
    else if
    (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        playerScore++
        fadeInText('You beat ' + computerSelection + ' with ' + playerSelection + '!')
        playerScoreCount.textContent = 'You: ' + playerScore
    }
    else {
        computerScore++
        fadeInText('Computer beat ' + playerSelection + ' with ' + computerSelection + '!')
        computerScoreCount.textContent = 'Computer: ' + computerScore
    }
    checkScore();
}

function checkScore() {
    if (playerScore == 5) {
        fadeInText('You won!');
        handleGameOver();
    }
    else if (computerScore == 5) {
        fadeInText('Computer won! Better luck next time!');
        handleGameOver();
    }
}

function handleGameOver() {
    // disable and hide the clicking buttons then display a winner
    imageArea.classList.remove('selection-pictures');
    imageArea.classList.add('disappear');
    replayButton.classList.remove('hidden');
    replayButton.addEventListener('click', () => {
      location.reload();
    });
}

function fadeInText(textStr) {
    updateText.textContent = '';
    updateText.style.opacity = 0;
    updateText.textContent = textStr;
    setTimeout(function() {
        updateText.classList.add("fade-in");
    }, 300);
}

function game() {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            image = button.querySelector('img');
            playerSelection = image.alt;
            computerSelection = getComputerSelection(computerSelectionArray);
            playRound(playerSelection, computerSelection);
        });
    });
}

fadeInText('First to 5 wins, choose your weapon!');
game();