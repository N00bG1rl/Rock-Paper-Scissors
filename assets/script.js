let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let roundWinner;
let finalWinner;
let pScore = 0;
let cScore = 0;

let playerScore = document.getElementById("pscore");
let computerScore = document.getElementById("cscore");
let resultText = document.getElementById("results");

let congratsText = document.getElementById("congrats");
let maybeText = document.getElementById("maybe");
let compChoice = document.getElementById("compChoice");

// Reset game button
const btn = document.querySelector("#reset");
btn.addEventListener("click", (e) => {
  pScore = 0;
  playerScore.textContent = pScore;
  cScore = 0;
  computerScore.textContent = cScore;
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
          pScore ++;
        } 
  else if ( (playerSelection === "Rock" && computerSelection === "Paper") ||
            (playerSelection === "Scissors" && computerSelection === "Rock") ||
            (playerSelection === "Paper" && computerSelection === "Scissors") ) {
              roundWinner = "computer";
              cScore ++;
            }
  else if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  else {
    throw "Error";
  }
  score(roundWinner); // Run text function to display score
};
// Text function to display score and one round winner
function score(roundWinner) {
  if (roundWinner === "player") {
    playerScore.textContent = pScore;
    resultText.textContent = `${(playerSelection)} beats ${(computerSelection)}! Player wins round!`;
  }
  else if (roundWinner === "computer") {
    computerScore.textContent = cScore;
    resultText.textContent = `${(computerSelection)} beats ${(playerSelection)}! Computer wins round!`;
  }
  else if (roundWinner === "tie")
    resultText.textContent = "Ohh, noo! It's a tie. Play again.";
  else {
    throw "Error";
  }// If score is 5, announce game winner
  if(finalWinner !== "player" && finalWinner !== "computer"){
    if (pScore === 5 ){
      finalWinner = "player";
      congratsText.textContent = "Congratulations, you just won the game!";
      maybeText.textContent = "Feel free to keep playing.";
    } else if(cScore === 5){
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
  compChoice.textContent = `Computer Chooses ${(computerSelection)}`;
  playRound(playerSelection, computerSelection); // Call function playround fo find round winner
});
paper.addEventListener('click', (e) =>{
  playerSelection = "Paper";
  computerSelection = getComputerSelection();
  compChoice.textContent = `Computer Chooses ${(computerSelection)}`;
  playRound(playerSelection, computerSelection);
});
scissors.addEventListener('click', (e) =>{
  playerSelection = "Scissors";
  computerSelection = getComputerSelection();
  compChoice.textContent = `Computer Chooses ${(computerSelection)}`;
  playRound(playerSelection, computerSelection);
});