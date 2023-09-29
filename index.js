//player's move
let playersXMark = "X";

//computer's move
let computerOMark = "O";
  
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
    return true;
  }
  
  function randomMove() {
    // for testing
    takeRandomEmptyCell(computerOMark);
  }
  
  function smartMove() {
    takeRandomAdjancedCell(computerOMark);
  }
