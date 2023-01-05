
// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered.
// Print the result to the console.(2p)
  // Save the numbers to an array, then use for-loop to iterate in reverse order.
  // Do not use array.reverse() function.
'use strict';

let nums = [];
for (let i = 0; i < 5; i++) {
  const num = +prompt('Give a number: ')
  nums.push(num);
}

for (let n = nums.length -1; n >= 0; n--) {
  console.log(nums[n]);
  document.querySelector('pre').textContent += `Reversed order from input: ${nums[n]} \n`;
}

