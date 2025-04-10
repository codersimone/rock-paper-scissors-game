// creating an object with the rules of the game
const gameRules = {
  "paper": "rock",
  "scissors": "paper",
  "rock": "scissors"
};

// computer choice
function getComputerChoice() {
  // getting the keys of the gameOptions object
  const gameRulesKeys = Object.keys(gameRules);
  // generating a random index of the gameOptions object (computer choice)
  const randomIndex = Math.floor(Math.random() * gameRulesKeys.length);
  // returning the value corresponding to a random key and assigns it to a variable
  const choiceResult = gameRules[gameRulesKeys[randomIndex]];
  // output the computer selection to the console separately, for clarity, so as not to change the value received by the choice variable and passed to the playRound function
  console.log("Computer have entered: " + choiceResult);
  return choiceResult;
};

// human choice
function getHumanChoice() {
  // request and receive the value of the person's choice, reduce the resulting string to lowercase for insensitivity of the value entered by the person and assign it to a variable
  const inputResult = prompt("Let's play! Choose your option and enter it in the field below: rock, paper or scissors", "").toLowerCase();
  // output the person's choice to the console separately, for clarity, so as not to change the value received by the input variable and passed to the playRound function.
  console.log("You have entered: " + inputResult);
  return inputResult;
};

// global variables for storing the count of rounds with starting values of 0.
let humanScore = 0;
let computerScore = 0;

// single round function with humanChoice and computerChoice parameters 
function playRound(humanChoice, computerChoice) {
  // rules for determining the winner of the round
  if (humanChoice === computerChoice) {
    console.log("A draw!");
  } else if (gameRules[humanChoice] === computerChoice) {
    console.log("You've won this round!");
    // increasing a person's score after a round
    humanScore++;
  } else {
    console.log("The computer won this round!");
    // increasing the computer's score after a round
    computerScore++;
  }
  // output of the current account of the round to the console 
  console.log(`Current score: You: ${humanScore}, Computer: ${computerScore}`);
};

// call the human and computer selection functions and assign them to variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// using the humanChoice and computerChoice parameters to accept human and computer choices as arguments when calling a function
playRound(humanSelection, computerSelection);