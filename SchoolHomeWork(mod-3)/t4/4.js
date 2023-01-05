
// Open t4 folder in your IDE/editor.
// Add HTML by using createElement() and appendChild methods. (2p)
  // Add the following HTML code to the element with id="target".
  // Add the values from 'students' array to the <option> elements in a for-loop.
  // open Element Inspector from DevTools to see the full result. (right click, inspect...)
'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const node = document.createElement('ul');

let html = '';
for (let student of students){
  html += '<option>'+student+'</option>';
  console.log(student);
}
document.body.appendChild(node);

