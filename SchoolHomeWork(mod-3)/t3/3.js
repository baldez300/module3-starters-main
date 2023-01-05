
// Open t3 folder in your IDE/editor. Add HTML by using innerHTML property. (2p)
  // Add the following HTML code to the element with id="target".
  // Add the values from 'names' array to the <li> elements in a for-loop.
'use strict';

const names = ['John', 'Paul', 'Jones'];
const node = document.querySelector('#target');
let html = '';

for (let name of names){
  html += '<li>' + name + '</li>';
}
node.innerHTML = html;

