
// Modify the function above so that it gets the number of sides on the dice as a parameter.
// With the modified function you can for example roll a 21-sided role-playing dice.
// The difference to the last exercise is that the dice rolling in the main program continues until
// the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)

'use strict';
function dice(number) {
  return Math.ceil(Math.random() * number);
}

const diceSidesCount = +prompt("How many sides on the dice?");

while (true) {
  const roll = dice(diceSidesCount);

  const li = document.createElement('li');
  li.textContent = roll;
  document.querySelector('ul').appendChild(li);

  if (roll === diceSidesCount) {
    console.log(roll);
    break;
  }
}