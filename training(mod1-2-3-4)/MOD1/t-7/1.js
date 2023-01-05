
//  Write a program that rolls user defined number of dice and displays the sum of the results of the dice rolls.(2p)
  // First, program asks the user for the number of dice rolls.
  // Then the program throws a die as many times as the user defined.
'use strict';

const numberOfDice = +prompt('Give number of dice.');

const diceRoll = Math.floor(Math.random() * numberOfDice) + 1;
console.log(diceRoll);

document.querySelector('h1').textContent = `The dice roll is: ${diceRoll}`;


// Another way to do the job ======================================
const dice = parseInt(prompt('How many dice do you want to throw?'));
let sum = 0

for (let i = 0; i < dice; i++) {
  sum += Math.ceil(Math.random() * 6);
  console.log(i);
}

document.querySelector('h1').textContent = `The sum of the dice is ${sum}`;