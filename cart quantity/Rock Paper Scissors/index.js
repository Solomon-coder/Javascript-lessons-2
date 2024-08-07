let move = ["Rock", "Paper", "Scissors"]
let winsEl = document.getElementById("wins-el")
let lossessEl = document.getElementById("losses-el")
let tiesEl = document.getElementById("ties-el");


let computerMove = ""  
let result = ""
let scores = JSON.parse(localStorage.getItem("scores")) || {
        wins: 0,
        losses: 0,
        ties: 0
    }
updateScore();
// if (!scores) {
//     scores = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }

function pickComputerMove() {
        let randomNumber = Math.floor(Math.random() * 3); 
    if (randomNumber === 0) {
        computerMove = 'Rock'
    } else if (randomNumber === 1) {
        computerMove = 'Paper'
    } else if (randomNumber === 2) {
        computerMove = 'Scissors'
    }
}


function playGame(playerMove) {
    pickComputerMove()
    if (playerMove === "Rock") {
        if (computerMove === "Rock") {
          result = "Tie.";
        } else if (computerMove === "Paper") {
          result = "You Lose.";
        } else if (computerMove === "Scissors") {
          result = "You Win.";
        }

    } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
        result = "You Win."
    } else if (computerMove === "Paper") {
        result = "Tie."
    } else if (computerMove === "Scissors") {
        result = "You Lose"
        }
    
    } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
        result = "You Lose."
    } else if (computerMove === "Paper") {
        result = "You Win."
    } else if (computerMove === "Scissors") {
        result = "Tie."
    }
    }
    
    if (result === "You Win.") {
      scores.wins += 1;
    } else if (result === "You Lose.") {
      scores.losses += 1;
    } else if (result === "Tie.") {
      scores.ties += 1;
    }

    localStorage.setItem("scores", JSON.stringify(scores));
    updateScore()

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${scores.wins}, losses: ${scores.losses}, Ties: ${scores.ties}`)
}

function updateScore() {
    let scoreResults = document.getElementById("score-results");
    scoreResults.innerHTML = `Wins: ${scores.wins}, losses: ${scores.losses}, Ties: ${scores.ties}`;
}

function rockBtn() {
    playGame("Rock")
}
function paperBtn() {
    playGame("Paper")
}
function scissorsBtn() {
    playGame("Scissors");
}
function resetBtn() {
    scores.wins = 0
    scores.losses = 0
    scores.ties = 0
    localStorage.removeItem("scores")
    updateScore();
}