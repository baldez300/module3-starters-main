
// Write a program that asks the user for the number of participants.
// After this, the program asks for the names of all participants.
// Finally, the program prints the names of the participants on the web page
// in an ordered list (<ol>) in alphabetical order. (2p)
'use strict';

const numberOfParticipant = +prompt('How many is the number of participant(s)?');
const nameList = [];

for (let i = 0; i < numberOfParticipant; i++) {
  const nameOfParticipant = prompt('Give a name of a participant: ');
  nameList.push(nameOfParticipant);
  console.log(nameList[i]);
}

// Names sorted in alphabetical order
nameList.sort(function(a, b) {
  return a.localeCompare(b);
});

// Loop through the list to print out
for (let j = 0; j < nameList.length; j++) {

  const li = document.createElement('li');
  li.textContent = nameList[j];
  document.querySelector('ol').append(li);
}

// This prints the list names without storing them in an array
//const numberOfNames = +prompt("How many participants do you want?");

//for(let i = 0; i < numberOfNames; i++) {
  //const participantsName = prompt("Give a name");
  //const li = document.createElement("li")
  //li.textContent = participantsName;
  //document.querySelector("ol").append(li);
//}