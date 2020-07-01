document.getElementById("play-game").addEventListener("click", playGame);

function getRandomNumber(lowerLimit, upperLimit) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}

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

function printResult(result) {
  document.getElementById("result").innerHTML = result;
}

function printMoves(moves) {
  document.getElementById("moves").innerHTML = moves;
}

function displayResult(playerMove, computerMove) {
  if (playerMove == computerMove) {
    printResult('remis');
  }
  if (playerMove == 'nożyce' && computerMove == 'papier') {
    printResult('Ty wygrywasz');
  }
  if (playerMove == 'papier' && computerMove == 'kamień') {
    printResult('Ty wygrywasz');
  }
  if (playerMove == 'kamień' && computerMove == 'papier') {
    printResult('Komputer wygrywa');
  }
  if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printResult('Ty wygrywasz');
  }
  if (playerMove == 'papier' && computerMove == 'nożyce') {
    printResult('Komputer wygrywa');
  }
  if (playerMove == 'nożyce' && computerMove == 'kamień') {
    printResult('Komputer wygrywa');
  }
  printMoves('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
}

function playGame() {
  const argPlayerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  const argComputerMove = getRandomNumber(1, 3);
  const playerMove = getMoveName(argPlayerMove);
  const computerMove = getMoveName(argComputerMove);
  displayResult(playerMove, computerMove);
}
