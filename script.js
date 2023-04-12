const options = [`rock`, `paper`, `scissors`];

let scores = [0, 0, 0]; //Players, Computers, Draws

const playerResponse = prompt(`Rock, Paper or Scissors?`)
  .slice(0, 1)
  .toLowerCase(); //Gets the response and gets the first letter because R, P, S are all different letters and then make it lowercase.

const computersChoice = Math.floor(Math.random() * 3); //Gives a number between

const computerResponse = options[computersChoice].slice(0, 1).toLowerCase(); //Getting the first letter so if they type rock, or R or r the response will be valid

console.log(computerResponse);
console.log(playerResponse);
console.log(computersChoice);
