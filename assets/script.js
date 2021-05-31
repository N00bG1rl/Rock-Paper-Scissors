let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let roundWinner;
let finalWinner;
let playerScoreCount = 0;
let computerScoreCount = 0;

let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScoreCount");
let resultText = document.getElementById("results");

let congratsText = document.getElementById("congrats");
let maybeText = document.getElementById("maybe");
let compChoice = document.getElementById("compChoice");
let playerChoice = document.getElementById("playerChoice");

// Reset game button
let resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", (e) => {
  playerScoreCount = 0;
  playerScore.textContent = playerScoreCount;
  computerScoreCount = 0;
  computerScore.textContent = computerScoreCount;
  playerChoice.textContent = "";
  compChoice.textContent = "";
  resultText.textContent = "";
  finalWinner = "";
  congratsText.textContent = "";
  maybeText.textContent = "";
});
// Random computer choice
function getComputerSelection() {
  let computerChoice = ["Rock", "Paper", "Scissors"];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)];
  };
// Get 1 round winner and add 1 to player score or computer score
function playRound(playerSelection, computerSelection) {
  if (  (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Scissors" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ) {
          roundWinner = "player";
          playerScoreCount ++;
        } 
  else if ( (playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Scissors" && computerSelection === "Rock") ||
            (playerSelection === "Paper" && computerSelection === "Scissors") ) {
              roundWinner = "computer";
              computerScoreCount ++;
            }
  else if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  else {
    throw "Error";
  }
  score(roundWinner);
};
// Display score and one round winner
function score(roundWinner) {
  if (roundWinner === "player") {
    playerScore.textContent = playerScoreCount;
    resultText.textContent = `${(playerSelection)} beats ${(computerSelection)}! Player wins round!`;
  }
  else if (roundWinner === "computer") {
    computerScore.textContent = computerScoreCount;
    resultText.textContent = `${(computerSelection)} beats ${(playerSelection)}! Computer wins round!`;
  }
  else if (roundWinner === "tie")
    resultText.textContent = "Ohh, noo! It's a tie. Play again.";
  else {
    throw "Error";
  }
  // If score is 5, announce game winner
  if(finalWinner !== "player" && finalWinner !== "computer"){
    if (playerScoreCount === 5 ){
      finalWinner = "player";
      congratsText.textContent = "Congratulations, you just won the game!";
      maybeText.textContent = "Feel free to keep playing.";
    } else if(computerScoreCount === 5){
      finalWinner = "computer";
      congratsText.textContent = "Sorry, Computer beat you :(";
      maybeText.textContent = "Feel free to keep playing.";
    }
  }
};
// Player selection
rock.addEventListener('click', (e) =>{
  playerSelection = "Rock";
  computerSelection = getComputerSelection();
  playerChoice.textContent = playerSelection;
  compChoice.textContent = `${(computerSelection)}`;
  playRound(playerSelection, computerSelection); // Call function playround fo find round winner
});
paper.addEventListener('click', (e) =>{
  playerSelection = "Paper";
  computerSelection = getComputerSelection();
  playerChoice.textContent = playerSelection;
  compChoice.textContent = `${(computerSelection)}`;
  playRound(playerSelection, computerSelection);
});
scissors.addEventListener('click', (e) =>{
  playerSelection = "Scissors";
  computerSelection = getComputerSelection();
  playerChoice.textContent = playerSelection;
  compChoice.textContent = `${(computerSelection)}`;
  playRound(playerSelection, computerSelection);
});