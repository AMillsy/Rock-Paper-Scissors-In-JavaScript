const options = [`rock`, `paper`, `scissors`];

let scores = [0, 0, 0]; //Players, Computers, Draws

const playerResponse = prompt(`Rock, Paper or Scissors?`)
  .slice(0, 1)
  .toLowerCase(); //Gets the response and gets the first letter because R, P, S are all different letters and then make it lowercase.

const computersChoice = Math.floor(Math.random() * 3); //Gives a number between

const computerResponse = options[computersChoice].slice(0, 1).toLowerCase(); //Getting the first letter so if they type rock, or R or r the response will be valid

const forceResponse = `r`;
console.log(computerResponse);
console.log(playerResponse);
console.log(computersChoice);

function checkWinner(str) {
  if (forceResponse === str) {
    return prompt(`Computer Wins!`);
  } else {
    return prompt(`Player wins!`);
  }
}

if (forceResponse === playerResponse) {
  alert(`You have drawn the match`);
} else {
  switch (playerResponse) {
    case `r`:
      checkWinner(`p`);
      break;
    case `p`:
      checkWinner(`s`);
      break;
    case `s`:
      checkWinner(`r`);
      break;
  }
}
