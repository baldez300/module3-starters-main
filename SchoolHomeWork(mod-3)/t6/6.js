
// Open t6 folder in your IDE/editor.
// Make a script that opens an alert window that says 'Button Clicked' when the <button> element is clicked. (1p)
'use strict';

const button = document.querySelector('button');
button.addEventListener('click', function(){
  alert('Button Clicked');
});
