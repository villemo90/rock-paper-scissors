// running play-game function
document.getElementById("play-game").addEventListener("click", playGame);
document.getElementById("reset-score").addEventListener("click", resetScore);

function getRandomNumber(lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}
// function changes specific number option into stings
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
}

function printWinner(winner) {
  document.getElementById("winner").innerHTML = winner;
}

function printMoves(moves) {
  document.getElementById("moves").innerHTML = moves;
}

let playerResultCount = 0;
let computerResult = 0;

function printResult() {
  document.getElementById("results").innerHTML = 'Ty ' + playerResultCount + ":" + computerResult + ' Komputer';
}

function displayResult(playerMove, computerMove) {
  if (playerMove == computerMove) {
    printWinner('remis');
  }
  if (playerMove == 'nożyce' && computerMove == 'papier') {
    playerResultCount++;
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'papier' && computerMove == 'nożyce') {
    computerResult++;
    printWinner('Komputer wygrywa');
  }
  if (playerMove == 'papier' && computerMove == 'kamień') {
    playerResultCount++;
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'kamień' && computerMove == 'papier') {
    computerResult++;
    printWinner('Komputer wygrywa');
  }
  if (playerMove == 'kamień' && computerMove == 'nożyce') {
    playerResultCount++;
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'nożyce' && computerMove == 'kamień') {
    computerResult++;
    printWinner('Komputer wygrywa');
  }
  printMoves('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  printResult();
}

function resetScore() {
  playerResultCount = 0;
  computerResult = 0
  printResult();
}

function playGame() {
  // player's choosing an option in popup window
  const argPlayerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  // computer choosing random numer between 1 and 3 range
  const argComputerMove = getRandomNumber(1, 3);
  // player's choosing one of the numbers defined and returned as strings
  const playerMove = getMoveName(argPlayerMove);
  // computer's choosing one of the numbers defined and returned as strings
  const computerMove = getMoveName(argComputerMove);
  // both players moves are comparing, and returning as result
  displayResult(playerMove, computerMove);
}
