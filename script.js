const options = [`rock`, `paper`, `scissors`];

let scores = [0, 0, 0]; //Players, Computers, Draws

const forceResponse = `r`;

function initializeGame() {
  const playerResponse = prompt(`Rock, Paper or Scissors?`)
    .slice(0, 1)
    .toLowerCase(); //Gets the response and gets the first letter because R, P, S are all different letters and then make it lowercase.

  const computersChoice = Math.floor(Math.random() * 3); //Gives a number between

  const computerResponse = options[computersChoice].slice(0, 1).toLowerCase(); //Getting the first letter so if they type rock, or R or r the response will be valid
}
function checkWinner(str) {
  if (forceResponse === str) {
    return alert(`Computer Wins!`);
  } else {
    return alert(`Player wins!`);
  }
}

function compareResponses() {
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
}
