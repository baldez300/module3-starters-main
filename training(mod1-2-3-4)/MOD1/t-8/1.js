
// Write a program that prompts the user for the start and end year.
// The program prints all leap years from the interval given by the user.
// Printing is done in an unordered list to the HTML document. (3p)
  // Example output HTML code:
  // <ul>
    //    <li>1992</li>
    //    <li>1996</li>
    //    <li>2000</li>
    //    <li>2004</li>
    //    <li>2008</li>
  // </ul>
'use strict';

const startYear = +prompt('Give the start year: ');
const endYear = +prompt('Give the end year: ');

for (let year = startYear; year <= endYear; year++ ) {

  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    const li = document.createElement('li');
    li.textContent = year;
    document.querySelector('ul').append(li);
  }
}
