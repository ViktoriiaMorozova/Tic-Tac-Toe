//pressing start button displays the board
let board = document.getElementById("board")
let gameOptions = document.getElementById("gameOptions")
function openBoard() {
  board.style.display = "flex";  //Board appear
  gameOptions.style.display = "none";  //Options disappear
}

//cells are each square, there are 9 cells 
let cells = document.querySelectorAll(".cell");


//player's move
let playersXMark = "X";

//computer's move
let computerOMark = "O";

//will be announced later is the winner's prompt 
let winnerPrompt = document.querySelector("winner");


let gameOver = false;

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

document.getElementById("reset-button").addEventListener("click", resetBoard); // Add event listener to the Reset button

let userClickCount = 0;

let randomMoveCount = 0;
let smartMoveCount = 0;

let smartMoveCall = 0;
let randomMoveCall  = 0;

function cellClicked() {
  if (gameOver || this.innerHTML !== "") return;
  const cellNumber = parseInt(this.id.split("_")[1]);

  this.innerHTML = playersXMark;
  console.log(`Cell number clicked: ${cellNumber}`);

  if (userClickCount === 0) {
    userClickCount++;
  }

  // if (randomMoveCall === 1) {
  //   setTimeout(takeRandomEmptyCell(computerOMark), 150);
  // }

  // if (smartMoveCall === 1) {
  //   setTimeout(takeRandomAdjancedCell(computerOMark), 150);
  // }


  if (userClickCount === 1) {
    setTimeout(takeRandomEmptyCell(computerOMark), 150);
  }

  // if (userClickCount > 1) {
  //   setTimeout(takeRandomAdjancedCell(computerOMark), 150);
  // }


}



//hovering function
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseenter", function() {
    if (!gameOver && this.innerHTML === "") {
      this.classList.add("hovered");
      this.innerHTML = playersXMark;
      setTimeout(() => {
        this.innerHTML = "";
      }, 50);
    }
  });
  cells[i].addEventListener("mouseleave", function() {
    this.classList.remove("hovered");

  });
  cells[i].addEventListener("click", cellClicked);
}

function isCellEmpty(cellNumber) {
  const cellId = 'cell_' + cellNumber;
  return document.getElementById(cellId).innerHTML.length == 0;
}

function checkCellMark(cellNumber, mark) {
  const cellId = 'cell_' + cellNumber;
  return document.getElementById(cellId).innerHTML == mark;
}

function takeRandomEmptyCell(mark) {
  const emptyCells = [];
  if (isCellEmpty(1)) {
    emptyCells.push('cell_1');

  }
  if (isCellEmpty(2)) {
    emptyCells.push('cell_2');
  }
  if (isCellEmpty(3)) {
    emptyCells.push('cell_3');
  }
  if (isCellEmpty(4)) {
    emptyCells.push('cell_4');
  }
  if (isCellEmpty(5)) {
    emptyCells.push('cell_5');
  }
  if (isCellEmpty(6)) {
    emptyCells.push('cell_6');
  }
  if (isCellEmpty(7)) {
    emptyCells.push('cell_7');
  }
  if (isCellEmpty(8)) {
    emptyCells.push('cell_8');
  }
  if (isCellEmpty(9)) {
    emptyCells.push('cell_9');
  }
  if (emptyCells.length == 0) {
    return false;
  }
  const n = Math.floor(Math.random() * emptyCells.length);
  document.getElementById(emptyCells[n]).innerHTML = mark;
  console.log(`Cell number COMPUTER clicked randomly: ${n}`);
  return true;
}

function takeRandomAdjancedCell(mark) {
  const emptyCells = [];
  if (isCellEmpty(1)) {
    if (checkCellMark(2, computerOMark) || checkCellMark(4, computerOMark) || checkCellMark(5, computerOMark)) {
      emptyCells.push('cell_1');
    }
  }
  if (isCellEmpty(2)) {
    if (checkCellMark(1, computerOMark) || checkCellMark(3, computerOMark) || checkCellMark(4, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(6, computerOMark)) {
      emptyCells.push('cell_2');
    }
  }
  if (isCellEmpty(3)) {
    if (checkCellMark(2, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(6, computerOMark)) {
      emptyCells.push('cell_3');
    }
  }
  if (isCellEmpty(4)) {
    if (checkCellMark(1, computerOMark) || checkCellMark(2, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(7, computerOMark) || checkCellMark(8, computerOMark)) {
      emptyCells.push('cell_4');
    }
  }
  if (isCellEmpty(5)) {
    if (checkCellMark(1, computerOMark) || checkCellMark(2, computerOMark) || checkCellMark(3, computerOMark) || checkCellMark(4, computerOMark) || checkCellMark(6, computerOMark) || checkCellMark(7, computerOMark) || checkCellMark(8, computerOMark) || checkCellMark(9, computerOMark)) {
      emptyCells.push('cell_5');
    }
  }
  if (isCellEmpty(6)) {
    if (checkCellMark(2, computerOMark) || checkCellMark(3, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(8, computerOMark) || checkCellMark(9, computerOMark)) {
      emptyCells.push('cell_6');
    }
  }
  if (isCellEmpty(7)) {
    if (checkCellMark(4, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(8, computerOMark)) {
      emptyCells.push('cell_7');
    }
  }
  if (isCellEmpty(8)) {
    if (checkCellMark(4, computerOMark) || checkCellMark(5, computerOMark) || checkCellMark(6, computerOMark) || checkCellMark(7, computerOMark) || checkCellMark(9, computerOMark)) {
      emptyCells.push('cell_8');
    }
  }
  if (isCellEmpty(9)) {
    if (checkCellMark(5, computerOMark) || checkCellMark(6, computerOMark) || checkCellMark(8, computerOMark)) {
      emptyCells.push('cell_9');
    }
  }
  if (emptyCells.length == 0) {
    return false;
  }
  const n = Math.floor(Math.random() * emptyCells.length);
  document.getElementById(emptyCells[n]).innerHTML = mark;
  console.log(`Cell number COMPUTER clicked adjacently: ${n}`);
  return true;
}



function randomMove() {
  // for testing
  randomMoveCount++;
  console.log("random square insert");
  if (randomMoveCount === 1) {
    setTimeout(takeRandomEmptyCell(computerOMark), 150);
  }
  if (randomMoveCount > 1) {
    setTimeout(takeRandomEmptyCell(computerOMark), 150);
  }
  document.getElementById("clever").disabled = true;
}

function smartMove() {
  smartMoveCount++;
  console.log("adjecent square insert");
  if (smartMoveCount === 1) {
    setTimeout(takeRandomAdjancedCell(computerOMark), 150);
  }
  if (smartMoveCount > 1) {
    setTimeout(takeRandomAdjancedCell(computerOMark), 150);
  }

  document.getElementById("random").disabled = true;
}


//reset button 
function resetBoard() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  winnerPrompt.textContent = "";
  playersXMark = "X";
  gameOver = false;
}

//computer move
document.querySelector('input[name="turnCPU"]').addEventListener('click', computerMove);

//easy move
document.querySelector('input[name="modeClever"]').addEventListener('click', smartMoveCall++, smartMove);

//hard move
document.querySelector('input[name="modeNotSoClever"]').addEventListener('click', randomMoveCall++, randomMove);




function computerMove() {
  if (gameOver) return;

  document.getElementById("playerTurn").disabled = true;
  // loop through the cells to find empty cell
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      // place "O" in the empty cell
      cells[i].innerHTML = computerOMark;
      // exit the loop
      break;
    }
  }
}
