import { shipLengths } from './ships';
const GAMEBOARD_LENGTH = 10;

// Gameboard Initialization
export default function initializeGameboard(player) {
  const gameboard = [];
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    gameboard[i] = [];
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      gameboard[i][j] = 'water';
    }
  }

  const ships = {};

  function placeShip(x, y, orientation, shipType) {
    if (x > GAMEBOARD_LENGTH
      || y > GAMEBOARD_LENGTH
      || x < 0
      || y < 0
      || ((orientation === 'horizontal') && (x + shipLengths[shipType] > GAMEBOARD_LENGTH))
      || ((orientation === 'vertical') && (y + shipLengths[shipType] > GAMEBOARD_LENGTH))
    ) {
      throw new Error('Can\'t place ship there');
    }
    if (orientation === 'horizontal') {
      for (let i = x; i < x + shipLengths[shipType]; i += 1) {
        gameboard[y][i] = shipType;
      }
    } else {
      for (let j = y; j < y + shipLengths[shipType]; j += 1) {
        gameboard[j][x] = shipType;
      }
    }
  }

  function getGameboard() {
    return gameboard;
  }

  function getPlayer() {
    return player;
  }

  return { getPlayer, getGameboard, placeShip };
}

// Add Hit/Miss
function shoot(x, y, shooter, defender) {

}
