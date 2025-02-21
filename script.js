function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(humanChoice, computerChoice){
  let humanChoiceLowerCase = humanChoice.toLowerCase();
  let computerChoiceLowerCase = computerChoice.toLowerCase();
  if(humanChoiceLowerCase === computerChoiceLowerCase){
    return "It's a tie!";
  }else if(humanChoiceLowerCase === "rock"){
    if(computerChoiceLowerCase === "paper"){
      computerScore++;
      return "You lose! Paper beats Rock.";
    }else{
      humanScore++;
      return "You win! Rock beats Scissors.";
    }
  }else if(humanChoiceLowerCase === "paper"){
    if(computerChoiceLowerCase === "rock"){
      humanScore++;
      return "You win! Paper beats Rock.";
    }else{
      computerScore++;
      return "You lose! Scissors beats Paper.";
    }
  }else if(humanChoiceLowerCase === "scissors"){
    if(computerChoiceLowerCase === "rock"){
      computerScore++;
      return "You lose! Rock beats Scissors.";
    }else{
      humanScore++;
      return "You win! Scissors beats Paper.";
    }
  }
}

let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const results = document.createElement("div");
const scoreHuman = document.createElement("div");
const scoreComputer = document.createElement("div");
const finalResult = document.createElement("div");
document.body.appendChild(results);
document.body.appendChild(scoreHuman);
document.body.appendChild(scoreComputer);
document.body.appendChild(finalResult);

scoreHuman.textContent = "Human: " + humanScore;
scoreComputer.textContent = "Computer: " + computerScore;

btnRock.addEventListener("click", () => {
  let humanSelection = "rock";
  let computerSelection = getComputerChoice();
  results.textContent = playRound(humanSelection, computerSelection);
  scoreHuman.textContent = "Human: " + humanScore;
  scoreComputer.textContent = "Computer: " + computerScore;
  if(humanScore == 5){
    finalResult.textContent = "You win the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }if (computerScore == 5){
    finalResult.textContent = "You lose the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }
});
btnPaper.addEventListener("click", () => {
  let humanSelection = "paper";
  let computerSelection = getComputerChoice();
  results.textContent = playRound(humanSelection, computerSelection);
  scoreHuman.textContent = "Human: " + humanScore;
  scoreComputer.textContent = "Computer: " + computerScore;
  if(humanScore == 5){
    finalResult.textContent = "You win the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }if (computerScore == 5) {
    finalResult.textContent = "You lose the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }
});
btnScissors.addEventListener("click", () => {
  let humanSelection = "scissors";
  let computerSelection = getComputerChoice();
  results.textContent = playRound(humanSelection, computerSelection);
  scoreHuman.textContent = "Human: " + humanScore;
  scoreComputer.textContent = "Computer: " + computerScore;
  if(humanScore == 5){
    finalResult.textContent = "You win the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }if (computerScore == 5) {
    finalResult.textContent = "You lose the game!";
    document.body.removeChild(results);
    document.body.removeChild(scoreHuman);
    document.body.removeChild(scoreComputer);
  }
});