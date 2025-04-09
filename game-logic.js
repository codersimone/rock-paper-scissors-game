// Through an object and its methods
// Computer choice
function getComputerChoice() {
  const options = {
    0: "rock",
    1: "paper",
    2: "scissors"
  };
  // getting the keys of the gameOptions object
  const optionsKeys = Object.keys(options);
  // generating a random index of the gameOptions object (computer choice)
  const optionsRandomIndex = Math.floor(Math.random() * optionsKeys.length);
  // Returning the value corresponding to a random key and assigns it to a new variable
  const computerChoiceValue = options[optionsKeys[optionsRandomIndex]]
  return console.log("Computer choice: " + computerChoiceValue);
}

getComputerChoice();

// Human choice
function getHumanChoice() {
  const humanChoiceValue = prompt("Let's play! Choose your option and enter it in the field below: rock, paper or scissors", ""); 
  return console.log("Human choice: " + humanChoiceValue);
}

getHumanChoice();

