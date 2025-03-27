import { SHIP_LENGTHS } from './ships';

// Checks if ship is being placed in empty water
function isOccupied(board, row, col, orientation, shipType) {
  if (orientation === 'horizontal') {
    for (let i = col; i < col + SHIP_LENGTHS[shipType]; i += 1) {
      if (board[row][i] !== 'water') {
        return true;
      }
    }
  } else {
    for (let j = row; j < row + SHIP_LENGTHS[shipType]; j += 1) {
      if (board[j][col] !== 'water') {
        return true;
      }
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

function isValidOrientation(orientation) {
  return orientation === 'horizontal' || orientation === 'vertical';
}
function isValidShipType(shipType) {
  return shipType in SHIP_LENGTHS;
}

function isDuplicate(shipType, fleet) {
  return fleet.getFleetStatus()[shipType];
}

// Checks if ship is placeable
export default function isShipPlaceable(
  fleet,
  board,
  boardLength,
  row,
  col,
  orientation,
  shipType,
) {
  if (!isInsideGameboard(boardLength, row, col, orientation, shipType)) {
    return 'bounds';
  }
  if (!isValidOrientation(orientation)) {
    return 'orientation';
  }
  if (isOccupied(board, row, col, orientation, shipType)) {
    return 'overlap';
  }
  if (!isValidShipType(shipType)) {
    return 'invalid ship';
  }
  if (isDuplicate(shipType, fleet)) {
    return 'duplicate';
  }
  return true;
}
