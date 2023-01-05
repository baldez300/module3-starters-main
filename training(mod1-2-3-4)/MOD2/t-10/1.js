
// Write a voting program as described below for small-scale meeting use. (8p)

  // The program asks for the number of candidates.
  // Then the program asks for the names of the candidates: 'Name for candidate 1'
  // Store the candidates' names and initial vote count in objects like this:
  // [
  //     {
  //         name: 'ellie',
  //         votes: 0,
  //     },
  //     {
  //         name: 'frank',
  //         votes: 0,
  //     },
  //     {
  //         name: 'pamela',
  //         votes: 0,
  //     },
  // ]

  // The program asks for the number of voters.
  // The program asks each voter in turn who they will vote for.
  // Voter should enter candidate name.
  // If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
  // The program announces the name of the winner and the results by printing it to the console:

  // The winner is pamela with 3 votes.
  // results:
  // pamela: 3 votes
  // frank: 1 votes
  // ellie: 1 votes

  // You need to compare votes so console log a and b to see how to get the correct property.
  // someArray.sort((a, b) => {
  //    console.log(a, b);
  //    return b - a;
  // });

'use strict';

const numberOfCandidates = +prompt('Give number of candidates');
const candidates = [];

for (let i = 0; i < numberOfCandidates; i++) {
  const name = prompt(`Give candidate name ${i + 1}`);
  if (candidates.some(candidate => candidate.name === name)) {
    alert(`Name already given`);
    i--;
    continue;
  }
  candidates.push({name: name, votes: 0});
}

const numberOfVotes = +prompt('Enter number of votes');
for (let i = 0; i < numberOfVotes; i++) {
  const voteName = prompt(`Vote nro. ${i + 1}: Give candidate name`);
  const vote = candidates.find(candidate => candidate.name === voteName);
  if (!vote) {
    alert(`Candidate name not found`);
  } else vote.votes++;
}
//console.log(candidates);

candidates.sort((a, b) => b.votes - a.votes);
document.querySelector('pre').textContent += `The winner is ${candidates[0].name} by ${numberOfVotes} votes. \nresults:`;
for (const candidate of candidates) {
  document.querySelector('pre').textContent += `\n${candidate.name}: ${candidate.votes} votes`;
}
