
// Write a program that prints the text "Should I calculate the square root?" in a confirmation window.
// If the user selects OK, the program asks for the number and calculates and prints its square root to the HTML document.
// If the user selects Cancel, the program prints the text "The square root is not calculated." to the HTML document (3p)
  // The confirmation window can be displayed with the function 'confirm()'.
  // The function returns true if the user selects OK.
  // If the user selects Cancel, the function returns false.

  // You cannot calculate the square root of a negative number.
  // If the number entered by the user is negative, the program prints
  // "The square root of a negative number is not defined" to the HTML document.
'use strict';

const calculate = confirm('Should I calculate the square root?');

if (calculate === true) {
  const number = +prompt('Give a number: ');

  if (number < 0) {
    document.querySelector('h1').textContent = `The square root of a negative number is not defined.`;
  } else {
    const square = Math.floor(Math.sqrt(number));
    document.querySelector('h1').textContent = ` The square root of ${number} is ${square}`;
  }

} else {
  document.querySelector('h1').textContent = `The square root is not calculated.`;
}


// More simplified way to do the same (save 2 lines from the above one)=======================================
if (confirm('Should I calculate the square root?')) {
  const num = +prompt('Give a number: ');

  if (num < 0) {
    document.querySelector('h1').textContent = `The square root of a negative number is not defined.`;
  } else {
    document.querySelector('h1').textContent = ` The square root of ${num} is ${Math.sqrt(num.toFixed(2))}`;
  }

} else {
  document.querySelector('h1').textContent = `The square root is not calculated.`;
}
