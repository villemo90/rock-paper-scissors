// running play-game function
document.getElementById("play-game").addEventListener("click", playGame);

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

function displayResult(playerMove, computerMove) {
  if (playerMove == computerMove) {
    printWinner('remis');
  }
  if (playerMove == 'nożyce' && computerMove == 'papier') {
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'papier' && computerMove == 'kamień') {
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'kamień' && computerMove == 'papier') {
    printWinner('Komputer wygrywa');
  }
  if (playerMove == 'kamień' && computerMove == 'nożyce') {
    printWinner('Ty wygrywasz');
  }
  if (playerMove == 'papier' && computerMove == 'nożyce') {
    printWinner('Komputer wygrywa');
  }
  if (playerMove == 'nożyce' && computerMove == 'kamień') {
    printWinner('Komputer wygrywa');
  }
  printMoves('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
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

  let playerResultCount = 0;
  let computerResult = 0;
}

// 0. Wyświetlanie wartości początkowej 0
// 1. Pobieranie wyniku z ruchu gracza
// 2. Pobieranie wyniku wyboru komputera
// 3. Porównanie wyników obu graczy (if else)
// 4. Zapisywanie wyników (?)
// 5. Wyświetlanie wyników
