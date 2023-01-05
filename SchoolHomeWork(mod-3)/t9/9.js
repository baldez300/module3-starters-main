
// Open t9 folder in your IDE/editor.
// This is continuation to previous task.
// There is only one text field left,
// where the user writes the calculation (addition, subtraction, multiplication or division) (4p)
  // You can use the includes and split methods.
  // eval() function is prohibited
  // No need to support decimal numbers, calculating integers is enough.
  // Example inputs: 3+5, 2-78, 3/6, etc..
'use strict';

document.querySelector('button#start').addEventListener('click', () => {
  const text = document.querySelector('#calculation').value;

  if (text.includes('+')) {
    const numbers = text.split('+');
    document.querySelector('#result').textContent = numbers.reduce(
        (acc, num) => acc + parseInt(num), 0);

  } else if (text.includes('-')) {
    const numbers = text.split('-');
    document.querySelector('#result').textContent = numbers.reduce(
        (acc, num) => acc - parseInt(num));
  } else if (text.includes('*')) {
    const numbers = text.split('*');
    document.querySelector('#result').textContent = numbers.reduce(
        (acc, num) => acc * parseInt(num));
  } else if (text.includes('/')) {
    const numbers = text.split('/');
    document.querySelector('#result').textContent = numbers.reduce(
        (acc, num) => acc / parseInt(num));
  }
});