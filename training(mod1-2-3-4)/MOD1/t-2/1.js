
// Write a program that prompts for user's name and then greets the user.
// Print the result to the HTML document: Hello, Name! (2p)
'use strict';

const userName = prompt('What is your name?');
//document.body.textContent = 'Hello, ' + userName + '!';
document.body.textContent = `Hello,   ${userName}!`;