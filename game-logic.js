const gameRules = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors',
};

function getHumanChoice() {
    const inputResult = prompt(
        "Let's play! Choose your option and enter it in the field below: rock, paper or scissors",
        ''
    ).toLowerCase();
    console.log('You have entered: ' + inputResult);
    return inputResult;
}

function getComputerChoice() {
    // getting the keys of the gameOptions object
    const gameRulesKeys = Object.keys(gameRules);
    // generating a random index of the gameOptions object
    const randomIndex = Math.floor(Math.random() * gameRulesKeys.length);
    const choiceResult = gameRules[gameRulesKeys[randomIndex]];
    console.log('Computer have entered: ' + choiceResult);
    return choiceResult;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (gameRules[humanChoice] === computerChoice) {
            humanScore++;
            console.log(
                `You've won this round! Current score: You: ${humanScore}, Computer: ${computerScore}`
            );
            return;
        }

        if (gameRules[computerChoice] === humanChoice) {
            computerScore++;
            console.log(
                `The computer won this round! Current score: You: ${humanScore}, Computer: ${computerScore}`
            );
            return;
        }

        console.log(
            `A draw! Current score: You: ${humanScore}, Computer: ${computerScore}`
        );
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations, you've won the game!");
        return;
    }

    if (computerScore > humanScore) {
        console.log("We're sorry, the computer won this game!");
        return;
    }

    console.log('The game is a draw, friendship has won!');
}

playGame();
