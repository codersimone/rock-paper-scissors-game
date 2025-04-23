const gameRules = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors',
};

function getHumanChoice() {
    let inputResult;
    for (;;) {
        inputResult = prompt(
            `Get ready to play?\nChoose your option and enter it in the field below:\nrock, paper or scissors`,
            ''
        );
        // verifying user input
        if (inputResult === null || inputResult.trim() === '') {
            alert(
                'You canceled the input or entered an empty string. Please choose again.'
            );
            continue;
        }

        inputResult = inputResult.toLowerCase();

        if (gameRules[inputResult]) {
            break;
        }

        alert('Invalid input. Please enter only - rock, paper or scissors.');
    }

    return inputResult;
}

function getComputerChoice() {
    // getting the keys of the gameOptions object
    const gameRulesKeys = Object.keys(gameRules);
    // generating a random index of the gameOptions object
    const randomIndex = Math.floor(Math.random() * gameRulesKeys.length);
    const choiceResult = gameRulesKeys[randomIndex];
    return choiceResult;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let resultMessage = `You have chosen: ${humanChoice}\nComputer has chosen: ${computerChoice}\n\n`;

        if (gameRules[humanChoice] === computerChoice) {
            humanScore++;
            resultMessage += 'You have won this round!';
        }

        if (gameRules[computerChoice] === humanChoice) {
            computerScore++;
            resultMessage += 'The computer has won this round!';
        }

        if (
            gameRules[humanChoice] !== computerChoice &&
            gameRules[computerChoice] !== humanChoice
        ) {
            resultMessage += 'It is a draw!';
        }

        resultMessage += `\n\nCurrent score: You: ${humanScore}, Computer: ${computerScore}`;
        alert(resultMessage);
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        alert('Congratulations, you have won the game!');
        return;
    }

    if (computerScore > humanScore) {
        alert('We are sorry, the computer has won this game!');
        return;
    }

    alert('The game is a draw, friendship wins!');
}

playGame();
