import { shipLengths } from './ships';

// Check if ship is being placed in empty water
function isOccupied(board, x, y, orientation, shipType) {
  if (orientation === 'horizontal') {
    for (let i = x; i < x + shipLengths[shipType]; i += 1) {
      if (board[y][i] !== 'water') { return true; }
    }
  } else {
    for (let j = y; j < y + shipLengths[shipType]; j += 1) {
      if (board[j][x] !== 'water') { return true; }
    }
  }
  return false;
}

// Check if ship is being placed inside gameboard
function isInsideGameboard(boardLength, x, y, orientation, shipType) {
  if (x > boardLength
    || y > boardLength
    || x < 0
    || y < 0
    || ((orientation === 'horizontal') && (x + shipLengths[shipType] > boardLength))
    || ((orientation === 'vertical') && (y + shipLengths[shipType] > boardLength))
  ) { return true; }
  return false;
}

// Check if ship is placeable
export default function isShipPlaceable(board, boardLength, x, y, orientation, shipType) {
  if (isInsideGameboard(boardLength, x, y, orientation, shipType)
    && !(isOccupied(board, x, y, orientation, shipType))) {
    return true;
  }
  return false;
}
