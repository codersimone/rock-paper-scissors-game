const gameОptions = ["rock", "paper", "scissors"];

// Computer choice
function getComputerChoice() {
  return gameОptions[Math.floor(Math.random() * gameОptions.length)];
}
console.log(getComputerChoice());

// Human choice
function getHumanChoice() {

}