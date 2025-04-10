# Rock Paper Scissors game

## Table of Contents

-   [Project Description](#project-description)
-   [Features](#features)
-   [How It Works](#how-it-works)
-   [Example](#example)
-   [Requirements](#requirements)
-   [Note](#note)
-   [Рublished Website](#published-website)

## Project Description

A simple browser game "Rock, Paper, Scissors", developed by me, a student of the Odin project.
Implemented using HTML and JavaScript. In the game, the player competes with the computer in a series of five rounds and at the end the winner is determined.

## Features

1. Interactive prompt-based gameplay in the browser.
2. Randomized computer moves.
3. Console output for game progress and results.
4. Keeps score across five rounds.
5. Declares the final winner or a draw.

## How It Works

The core game logic is handled in game-logic.js, which is linked from index.html.

**Main Components**:

1. getHumanChoice():
   Prompts the user to input "rock", "paper", or "scissors". Converts the input to lowercase and logs it to the console.

2. getComputerChoice():
   Randomly generates a move for the computer. Logs the computer's choice.

3. playRound(humanChoice, computerChoice):
   Compares the user's choice with the computer's based on predefined rules. Updates and logs the score.

4. playGame():
   Runs five rounds of the game. After all rounds, it announces the overall winner or a draw.

**Game Rules**:

1. Rock beats Scissors
2. Scissors beats Paper
3. Paper beats Rock

## Example

You'll be prompted via browser pop-ups to enter your move. The computer will randomly choose its move, and the results will be shown in the browser console.

## Requirements

A modern web browser (Chrome, Firefox, Safari, etc.)

## Note

The game interaction happens via prompt() and outputs messages to the browser console, so make sure to have the developer console open (F12 or right-click → Inspect → Console tab) while playing.

## Рublished Website

https://codersimone.github.io/rock-paper-scissors-game/
