function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    choice = "rock";
  } else if (choice == 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  let hChoice = prompt("Make your choice:").toLowerCase();
  let text;
  if (hChoice == null || hChoice == "") {
    return (text = "Invalid Input");
  } else if (hChoice == "rock" || hChoice == "paper" || hChoice == "scissors") {
    return hChoice;
  } else {
    return (text = "Please make a valid choice");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
