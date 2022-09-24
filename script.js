'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const diceRollBtn = document.querySelector('.btn--roll');
const hldBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

let currentScore = 0;

// Resetting the Game
const resetGame = () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
};
// Generating a dice roll
const rollDice = () => {
  const diceVal = Math.trunc(Math.random() * 6) + 1;

  // Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${diceVal}.png`;
  // console.log(diceVal);

  // Check if the Dice val is 1 , then switch to next player

  if (diceVal !== 1) {
    // Add divceVal to current score
    currentScore += diceVal;
    console.log(currentScore);
    // Have to make this for both Player
    currentScore0El.textContent = currentScore;
  } else {
    // Switch to the next Player
    currentScore = 0;
    currentScore0El.textContent = currentScore;
  }
};

resetGame();

diceRollBtn.addEventListener('click', rollDice);

newGameBtn.addEventListener('click', resetGame);
