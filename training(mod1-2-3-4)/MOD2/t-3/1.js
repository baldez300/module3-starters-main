
// Write a program that asks for the names of six dogs.
// The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p)

'use strict';

const nameList = [];

for (let i = 0; i < 6; i++) {
  const dogName = prompt('What is the dog name?');
  nameList.push(dogName);
  console.log(nameList[i]);
}

nameList.sort( function(a, b) {
  return b.localeCompare(a);
  }
);

for (let n = 0; n < nameList.length; n++) {
  const li = document.createElement('li');
li.textContent = nameList[n];

document.querySelector('ul').append(li);
}

// Another way to do the same as above solution================================
const dogs = [];
for (let d = 0; d < 6; d++) {
  const dogName = prompt('Give a dog name');
  dogs.push(dogName);
  console.log(dogs[d])
}

dogs.sort((s1, s2) => {
  if (s1 < s2) return 1;
  else if (s1 > s2) return -1;
  else return 0;
});

dogs.forEach(dog => {
  const li = document.createElement('li');
  li.textContent = dog;
  document.querySelector('ul').append(li);
});