// Through an array and its methods
// const gameОptions = ["rock", "paper", "scissors"];

// Computer choice
// function getComputerChoice() {
//   return gameОptions[Math.floor(Math.random() * gameОptions.length)];
// }
// console.log(getComputerChoice());

// Through an object and its methods
const gameОptions = {
  0: "rock",
  1: "paper",
  2: "scissors"
};

// Computer choice
function getComputerChoice() {
  // getting the keys of the gameOptions object
  const gameOptionsKeys = Object.keys(gameОptions);
  // generating a random index of the gameOptions object (computer choice)
  const computerChoiceRandomIndex = Math.floor(Math.random() * gameOptionsKeys.length);
  // Returning the value corresponding to a random key
  return gameОptions[gameOptionsKeys[computerChoiceRandomIndex]];
}

console.log(getComputerChoice());

// Human choice
function getHumanChoice() {

}