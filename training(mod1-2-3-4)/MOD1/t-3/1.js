
// Write a program that prompts for three integers.
// The program prints the sum, product and average of the numbers to the HTML document. (3p)
  // remember to convert strings to numbers when adding
  // 'parseInt()' and 'parseFloat' convert numbers to string but 'toString()' does the opposite
'use strict';

// Here we add '+' sign to 'prompt()' to convert the numbers to string
const num1 = +prompt('Give first integer');
const num2 = +prompt('Give second integer');
const num3 = +prompt('Give third integer');

//const sums = num1 + num2 + num3;

const sumOfIntegers = num1 + num2 + num3;
const productOfIntegers = num1 * num2 * num3;
//const averageOfIntegers = sumOfIntegers / 3; // for the simple way division is done here
const averageOfIntegers = sumOfIntegers;

// Simple way to print results out
//document.body.textContent = `Sum = ${sumOfIntegers}, Product = ${productOfIntegers}, Average = ${averageOfIntegers}`;

// Fancy way to print results out
document.querySelector('pre').textContent += `Numbers sum ${sumOfIntegers}\n`;
document.querySelector('pre').textContent += `Numbers product ${productOfIntegers}\n`;
document.querySelector('pre').textContent += `Numbers average ${(averageOfIntegers/3).toFixed(2)}\n`;