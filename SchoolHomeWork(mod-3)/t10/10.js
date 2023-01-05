
// Open t10 folder in your IDE/editor.
// Read the first name and last name values from the form and print them in the <p id="target"> (2p)
  // remember to stop the default action of the form
  // you can use attribute selectors in querySelector() to select the <input> elements
  // example output: Your name is Luke Skywalker
'use strict';

const form = document.getElementById('source');
form.addEventListener('submit', printOutFullName, false);

function printOutFullName(event) {
  const input1 = document.getElementById('firstname').value;
  const input2 = document.getElementById('lastname').value;
  const p = document.getElementById('target');

  if (input1 === '' || input2 === '') {
    alert('Field(s) empty');
    return false;

  } else {
    p.append('Your name is: ', input1,' ', input2);
    console.log(p);
  }

  event.preventDefault();
}
