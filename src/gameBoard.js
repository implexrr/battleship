import { makeShip, shipLengths } from './ships';

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

  const fleet = {};
  function addToFleet(x, y, orientation, shipType) {
    fleet[shipType] = makeShip(x, y, orientation, shipType);
  }

  // Check if ship is being placed in empty water
  function isOccupied(x, y, orientation, shipType) {
    if (orientation === 'horizontal') {
      for (let i = x; i < x + shipLengths[shipType]; i += 1) {
        if (gameboard[y][i] !== 'water') { return true; }
      }
    } else {
      for (let j = y; j < y + shipLengths[shipType]; j += 1) {
        if (gameboard[j][x] !== 'water') { return true; }
      }
    }
    return false;
  }

  // Check if ship is being placed inside gameboard
  function isInsideGameboard(x, y, orientation, shipType) {
    if (x > GAMEBOARD_LENGTH
      || y > GAMEBOARD_LENGTH
      || x < 0
      || y < 0
      || ((orientation === 'horizontal') && (x + shipLengths[shipType] > GAMEBOARD_LENGTH))
      || ((orientation === 'vertical') && (y + shipLengths[shipType] > GAMEBOARD_LENGTH))
    ) { return true; }
    return false;
  }

  // Check if ship is placeable
  function isShipPlaceable(x, y, orientation, shipType) {
    if (isInsideGameboard(x, y, orientation, shipType)
      && !(isOccupied(x, y, orientation, shipType))) {
      return true;
    }
    return false;
  }

  // Place ship and add it to player fleet
  function placeShip(x, y, orientation, shipType) {
    if (!(isShipPlaceable(x, y, orientation, shipType))) {
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
    addToFleet(x, y, orientation, shipType);
  }

  // Get player fleet status
  function getFleetStatus() {
    const fleetStatus = {};
    Object.keys(fleet).forEach((ship) => {
      const health = fleet[ship].getShipLength();
      const hits = fleet[ship].getHits();
      const isSunk = fleet[ship].isShipSunk();
      fleetStatus[ship] = { health, hits, isSunk };
    });
    return fleetStatus;
  }

  // Register a hit on a ship
  function registerHit(x, y) {
    if (gameboard[x][y] === 'water') {
      gameboard[x][y] = 'miss';
    } else if (gameboard[x][y] in shipLengths) {
      const ship = gameboard[x][y];
      gameboard[x][y] = 'hit';
      fleet[ship].hitShip(x, y);
    }
  }

  function getGameboard() {
    return gameboard;
  }

  function getPlayer() {
    return player;
  }

  return {
    getPlayer, getGameboard, placeShip, getFleetStatus, registerHit,
  };
}
