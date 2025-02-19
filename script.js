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
  let humainChoice = prompt("Please enter your choice: rock, paper or scissors.");
  return humainChoice;
}