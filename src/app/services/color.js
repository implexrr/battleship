import { GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';
import { SHIP_LENGTHS } from '../gameMechanics/ships';

// Update all cells on the board based on the current board matrix state
function colorBoard(cellMap, boardMatrix) {
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      cellMap[i][j].setAttribute('cell-type', boardMatrix[i][j]);
    }
  }
}

// Visually marks cells corresponding to a placed ship
function colorShip(cellMap, x, y, orientation, shipType) {
  if (orientation === 'horizontal') {
    for (let i = y; i < y + SHIP_LENGTHS[shipType]; i += 1) {
      cellMap[x][i].setAttribute('cell-type', shipType);
    }
  } else {
    for (let i = x; i < x + SHIP_LENGTHS[shipType]; i += 1) {
      cellMap[i][y].setAttribute('cell-type', shipType);
    }
  }
}

export { colorBoard, colorShip };
