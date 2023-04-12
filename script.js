const options = [`rock`, `paper`, `scissors`];

let scores = [0, 0, 0]; //Players, Computers, Draws

const response = prompt(`Rock, Paper or Scissors?`);

console.log(response);

for (let i = 0; i < 100; i++) console.log(Math.floor(Math.random() * 3));

const computersChoice = Math.floor(Math.random() * 3); //Gives a number between

console.log(computersChoice);
