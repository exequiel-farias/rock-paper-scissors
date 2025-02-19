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

function getHumanChoice(){
  let humanChoice = prompt("Please enter your choice: rock, paper or scissors.");
  return humanChoice;
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

function playGame(){

  for(let i=0; i<5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if(humanScore > computerScore){
    console.log("You win the game!");
  }else console.log("You lose the game!");
}

playGame();