import { shipLengths } from './ships';
import initializeFleet from './fleet';
import createEmptyBoard from './emptyBoard';
import isShipPlaceable from './validatePlacement';

const GAMEBOARD_LENGTH = 10;

// Gameboard Initialization
export default function initializeGameboard(player) {
  let gameboard = createEmptyBoard(GAMEBOARD_LENGTH);
  let fleet = initializeFleet();
  let gameOver = false;

  // Reset all major gameboard related variables
  function resetGameboard() {
    gameboard = createEmptyBoard(GAMEBOARD_LENGTH);
    fleet = initializeFleet();
    gameOver = false;
  }

  // Place ship and add it to player fleet
  function placeShip(row, col, orientation, shipType) {
    if (!(shipType in shipLengths)) {
      throw new Error('Not a ship type');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Not a valid orientation');
    }
    if (!(isShipPlaceable(gameboard, GAMEBOARD_LENGTH, row, col, orientation, shipType))) {
      throw new Error('Can\'t place ship there');
    }
    if (orientation === 'horizontal') {
      for (let i = col; i < col + shipLengths[shipType]; i += 1) {
        gameboard[row][i] = shipType;
      }
    } else {
      for (let j = row; j < row + shipLengths[shipType]; j += 1) {
        gameboard[j][col] = shipType;
      }
    }
    fleet.addToFleet(row, col, orientation, shipType);
  }

  // Change status of all "hit" ship tiles to 'wreckage'
  function sinkAllShips() {
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
        if (gameboard[i][j] === 'hit') { gameboard[i][j] = 'wreckage'; }
      }
    }
  }

  // Register a hit on a ship
  function registerHit(x, y) {
    if (gameboard[x][y] === 'water') {
      gameboard[x][y] = 'miss';
    } else if (gameboard[x][y] in shipLengths) {
      const ship = gameboard[x][y];
      gameboard[x][y] = 'hit';
      fleet.ships[ship].hitShip(x, y);
    }
    if (fleet.isFleetSunk()) {
      sinkAllShips();
      gameOver = true;
    }
  }

  function getBoard() {
    return gameboard;
  }

  function getPlayer() {
    return player;
  }

  function isGameOver() {
    return gameOver;
  }

  function isShipFullyHere(row, col, orientation, shipType) {
    if (!(shipType in shipLengths)) {
      throw new Error('Not a ship type');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Not a valid orientation');
    }
    if (orientation === 'horizontal') {
      for (let i = col; i < col + shipLengths[shipType]; i += 1) {
        if (gameboard[row][i] !== shipType) {
          return false;
        }
      }
    } else {
      for (let i = row; i < row + shipLengths[shipType]; i += 1) {
        if (gameboard[i][col] !== shipType) {
          return false;
        }
      }
    }
    return true;
  }

  function placeWreckage(x, y) {
    gameboard(x, y) = 'wreckage';
  }

  return {
    fleet, getPlayer, getBoard, placeShip, registerHit, isGameOver, isShipFullyHere, resetGameboard,
  };
}

// Play 100 games of battleship given random coord and choice
