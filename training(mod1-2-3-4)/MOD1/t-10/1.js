
// Make a program that asks the user for the number of dice and the sum of the eye numbers of interest to the user.
// The purpose of your program is now to find out with what probability the number of dice given by the user produces the sum of the number of eyes given by the user.
// For example, if the user enters 3 as the number of dice and 15 as the sum of the eyes, the program calculates the probability that the sum of the three dice's eye numbers is 15. (5p)
  // Solve the problem by simulating: Have the program roll a given number of dice in a for-loop (e.g. 10,000 times) and calculate what proportion of the repetitions produced the sum of eye numbers of interest to the user.
  // Print the result on the HTML document: 'Probability to get sum 7 with 2 dice is 15.64%'
  // you can limit the number of decimals with toFixed()
  // test values:
    // 2 dice, sum 7, probability is about 15-17%
    // 3 dice, sum 15, probability is about 5%
'use strict';

const numberOfDice = +prompt('how many dice do you want to throw?');
const sumOfEyes = +prompt('What is the sum of the eyes you want to get?');

let totalSums = 0;

for (let i = 0; i < 10_000; i++) {
  let sum = 0;
  for (let j = 0; j < numberOfDice; j++) {
    sum += Math.ceil(Math.random() * 6);
  }
  if (sum === sumOfEyes) totalSums++;
}

const percentage = ((totalSums / 10_000) * 100).toFixed(2);

document.querySelector('h1').textContent = `With ${numberOfDice} dice, the probability of getting ${sumOfEyes} is ${Math.round(percentage)}%`;