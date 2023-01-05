
// Write a program that asks the user for numbers until he gives zero.
// The given numbers are printed in the console from the largest to the smallest. (2p)
'use strict';

const numsList = [];

while (true) {
  const num = +prompt('Give a number');

  if (num === 0) {
    break;
  }

  numsList.push(num);
}

// Sorting the numbers from largest to the smallest
const sorted = numsList.slice().sort(function(a, b) {
  return b - a;
});
console.log(sorted);

// Printing the numbers in the screen but required
sorted.forEach((num) => {
  const li = document.createElement('li');
  li.textContent = num;
  document.querySelector('ul').append(li);
});
