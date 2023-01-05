
// Open t8 folder in your IDE/editor. Make a simple calculator. (4p)
  // There are two input fields where user enters numbers.
  // Based on the drop-down list, calculator performs addition, subtraction, multiplication or division of these two numbers.
  // Use the value attribute of <option> elements to decide which operation the calculator needs to do. Example.
  // Show the result in <p id="result"> when the button is clicked.
'use strict';

document.querySelector('button').addEventListener('click', () => {
  const num1 = parseInt(document.querySelector('#num1').value);
  const num2 = parseInt(document.querySelector('#num2').value);
  const operation = document.querySelector('#operation').value;
  const result = document.querySelector('#result');

  if (operation === 'add') result.textContent = num1 + num2;
  else if (operation === 'sub') result.textContent = num1 - num2;
  else if (operation === 'multi') result.textContent = num1 * num2;
  else if (operation === 'div') result.textContent = num1 / num2.toFixed(2);
});
