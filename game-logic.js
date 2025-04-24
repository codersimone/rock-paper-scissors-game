const gameRules = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors',
};

let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;
const maxRounds = 5;

const buttonsNames = ['rock', 'paper', 'scissors'];
const buttons = {};

const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
document.body.appendChild(buttonsContainer);

buttonsNames.forEach((buttonName) => {
    const button = document.createElement('button');
    button.classList.add('game-button', `btn-${buttonName}`);
    button.textContent = buttonName;
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        playRound(buttonName, computerSelection);
    });
    buttons[buttonName] = button;
    buttonsContainer.appendChild(button);
});

const scoreTable = document.createElement('table');
scoreTable.classList.add('score-table');
scoreTable.innerHTML = `
    <thead>
        <tr>
            <th>Player</th>
            <th>Computer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td id="player-choice">-</td>
            <td id="computer-choice">-</td>
        </tr>
        <tr>
            <td id="player-score">0</td>
            <td id="computer-score">0</td>
        </tr>
    </tbody>
`;
document.body.appendChild(scoreTable);

const roundInfo = document.createElement('div');
roundInfo.classList.add('round-info');
document.body.appendChild(roundInfo);

const resultContainer = document.createElement('div');
resultContainer.classList.add('result-container');
document.body.appendChild(resultContainer);

function getComputerChoice() {
    // getting the keys of the gameRules object
    const gameRulesKeys = Object.keys(gameRules);
    // generating a random index of the gameRules object
    return gameRulesKeys[Math.floor(Math.random() * gameRulesKeys.length)];
}

function playRound(humanChoice, computerChoice) {
    playedRounds++;

    roundInfo.textContent = `Round ${playedRounds}`;

    document.querySelector('#player-choice').textContent = humanChoice;
    document.querySelector('#computer-choice').textContent = computerChoice;

    let roundMessage = '';

    if (gameRules[humanChoice] === computerChoice) {
        humanScore++;
        roundMessage = 'You have won this round!';
    }

    if (gameRules[computerChoice] === humanChoice) {
        computerScore++;
        roundMessage = 'The computer has won this round!';
    }

    if (
        gameRules[humanChoice] !== computerChoice &&
        gameRules[computerChoice] !== humanChoice
    ) {
        roundMessage = 'It is a draw!';
    }

    document.querySelector('#player-score').textContent = humanScore;
    document.querySelector('#computer-score').textContent = computerScore;

    if (playedRounds === maxRounds) {
        resultContainer.textContent = roundMessage + '\n\n' + finalResult();
        disableButtons();
    } else {
        resultContainer.textContent = roundMessage;
    }
}

function disableButtons() {
    Object.values(buttons).forEach((btn) => {
        btn.disabled = true;
    });
}

function finalResult() {
    let finalMessage = `Game result:\n`;

    if (humanScore > computerScore) {
        finalMessage += 'Congratulations, you have won the game!';
    }

    if (computerScore > humanScore) {
        finalMessage += 'We are sorry, the computer won this game!';
    }

    if (computerScore === humanScore) {
        finalMessage += 'The game is a draw, friendship wins!';
    }

    return finalMessage;
}
