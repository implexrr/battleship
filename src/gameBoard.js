import { shipLengths } from './ships';
import initializeFleet from './fleet';
import createEmptyBoard from './emptyBoard';
import isShipPlaceable from './validatePlacement';

const GAMEBOARD_LENGTH = 10;

// Gameboard Initialization
export default function initializeGameboard(player) {
  const gameboard = createEmptyBoard(GAMEBOARD_LENGTH);
  const fleet = initializeFleet();
  let gameOver = false;

  // Place ship and add it to player fleet
  function placeShip(x, y, orientation, shipType) {
    if (!(shipType in shipLengths)) {
      throw new Error('Not a ship type');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Not a valid orientation');
    }
    if (!(isShipPlaceable(gameboard, GAMEBOARD_LENGTH, x, y, orientation, shipType))) {
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
    fleet.addToFleet(x, y, orientation, shipType);
  }

  // Change status of all "hit" ship tiles to sunk
  function sinkAllShips() {
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
        if (gameboard[i][j] === 'hit') { gameboard[i][j] = 'sunk'; }
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

  function isShipFullyHere(xStart, yStart, orientation, shipType) {
    if (!(shipType in shipLengths)) {
      throw new Error('Not a ship type');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Not a valid orientation');
    }
    if (orientation === 'horizontal') {
      for (let i = xStart; i < xStart + shipLengths[shipType]; i += 1) {
        if (gameboard[yStart][i] !== shipType) {
          return false;
        }
      }
    } else {
      for (let i = yStart; i < yStart + shipLengths[shipType]; i += 1) {
        if (gameboard[i][xStart] !== shipType) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    fleet, getPlayer, getBoard, placeShip, registerHit, isGameOver, isShipFullyHere,
  };
}

// Play 100 games of battleship given random coord and choice
