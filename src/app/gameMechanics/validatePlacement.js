import { SHIP_LENGTHS } from './ships';

// Checks if ship is being placed in empty water
function isOccupied(board, row, col, orientation, shipType) {
  if (orientation === 'horizontal') {
    for (let i = col; i < col + SHIP_LENGTHS[shipType]; i += 1) {
      if (board[row][i] !== 'water') { return true; }
    }
  } else {
    for (let j = row; j < row + SHIP_LENGTHS[shipType]; j += 1) {
      if (board[j][col] !== 'water') { return true; }
    }
  }
  return false;
}

// Checks if ship is being placed inside gameboard
function isInsideGameboard(boardLength, row, col, orientation, shipType) {
  if (row < 0
    || col < 0
    || ((orientation === 'horizontal') && (col + SHIP_LENGTHS[shipType] > boardLength))
    || ((orientation === 'vertical') && (row + SHIP_LENGTHS[shipType] > boardLength))
  ) { return false; }
  return true;
}

// Checks if ship is placeable
export default function isShipPlaceable(board, boardLength, row, col, orientation, shipType) {
  if (isInsideGameboard(boardLength, row, col, orientation, shipType)
    && !(isOccupied(board, row, col, orientation, shipType))) {
    return true;
  }
  return false;
}
