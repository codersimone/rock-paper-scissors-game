const gameRules = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors',
};

function getHumanChoice() {
    // request and receive the value of the person's choice, reduce the resulting string to lowercase for insensitivity of the value entered by the person and assign it to a variable
    const inputResult = prompt(
        "Let's play! Choose your option and enter it in the field below: rock, paper or scissors",
        ''
    ).toLowerCase();
    // output the person's choice to the console separately, for clarity, so as not to change the value received by the input variable and passed to the playRound function.
    console.log('You have entered: ' + inputResult);
    return inputResult;
}

function getComputerChoice() {
    // getting the keys of the gameOptions object
    const gameRulesKeys = Object.keys(gameRules);
    // generating a random index of the gameOptions object (computer choice)
    const randomIndex = Math.floor(Math.random() * gameRulesKeys.length);
    // returning the value corresponding to a random key and assigns it to a variable
    const choiceResult = gameRules[gameRulesKeys[randomIndex]];
    // output the computer selection to the console separately, for clarity, so as not to change the value received by the choice variable and passed to the playRound function
    console.log('Computer have entered: ' + choiceResult);
    return choiceResult;
}

function playGame() {
    // global variables for storing the count of rounds with starting values of 0.
    let humanScore = 0;
    let computerScore = 0;

    // single round function with humanChoice and computerChoice parameters
    function playRound(humanChoice, computerChoice) {
        // rules for determining the winner of the round
        if (gameRules[humanChoice] === computerChoice) {
            // increasing a person's score after a round
            humanScore++;
            console.log(
                `You've won this round! Current score: You: ${humanScore}, Computer: ${computerScore}`
            );
            return;
        }

        if (gameRules[computerChoice] === humanChoice) {
            // increasing the computer's score after a round
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

    // a for loop for calling the playground function 5 times in a row
    for (let i = 0; i < 5; i++) {
        // call the human and computer selection functions and assign them to variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        // using the humanChoice and computerChoice parameters to accept human and computer choices as arguments when calling a function
        playRound(humanSelection, computerSelection);
    }

    // determine the winner based on 5 rounds and output one of the received values to the console
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
