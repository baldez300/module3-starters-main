
// Write a program that prompts the user for numbers.
// When the user enters one of the numbers he previously entered,
// the program will announce that the number has already been given and stops its operation
// and then prints all the given numbers to the console in ascending order. (2p)
'use strict';

const numberlist = [];;

while (true) {
  const num = +prompt('Give a number');

  // We can also use 'includes()' method without '!==-1'
  if (numberlist.indexOf(num) !== -1) {
    alert('The number entered has already been giving');
    break;
  } else {
    numberlist.push(num);
  }
}

// Put numbers in ascending order
const ascendOrder = numberlist.slice().sort(function(a, b) {
  return a - b;
});
console.log(ascendOrder);

// Printing the number on the screen
ascendOrder.forEach((num1) => {
  const li = document.createElement('li');
  li.textContent = num1;
  document.querySelector('ul').appendChild(li);
});



