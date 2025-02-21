import { makeShip, shipLengths } from './ships';

const GAMEBOARD_LENGTH = 10;

// Gameboard Initialization
export default function initializeGameboard(player) {
  const gameboard = {
    player,
    board: [],
    gameOver: false,
    fleet: {
      health: 0,
    },
  };

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    gameboard.board[i] = [];
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      gameboard.board[i][j] = 'water';
    }
  }

  function addToFleet(x, y, orientation, shipType) {
    gameboard.fleet[shipType] = makeShip(x, y, orientation, shipType);
    gameboard.fleet.health += shipLengths[shipType];
  }

  // Check if fleet is sunk
  function isFleetSunk() {
    return gameboard.fleet.health <= 0;
  }

  // Change status of all "hit" ship tiles to sunk
  function sinkAllShips() {
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
        if (gameboard.board[i][j] === 'hit') { gameboard.board[i][j] = 'sunk'; }
      }
    }
  }

  // Check if ship is being placed in empty water
  function isOccupied(x, y, orientation, shipType) {
    if (orientation === 'horizontal') {
      for (let i = x; i < x + shipLengths[shipType]; i += 1) {
        if (gameboard.board[y][i] !== 'water') { return true; }
      }
    } else {
      for (let j = y; j < y + shipLengths[shipType]; j += 1) {
        if (gameboard.board[j][x] !== 'water') { return true; }
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
        gameboard.board[y][i] = shipType;
      }
    } else {
      for (let j = y; j < y + shipLengths[shipType]; j += 1) {
        gameboard.board[j][x] = shipType;
      }
    }
    addToFleet(x, y, orientation, shipType);
  }

  // Get player fleet status
  function getFleetStatus() {
    const fleetStatus = {};
    Object.keys(gameboard.fleet).forEach((ship) => {
      const health = gameboard.fleet[ship].getShipLength();
      const hits = gameboard.fleet[ship].getHits();
      const isSunk = gameboard.fleet[ship].isShipSunk();
      fleetStatus[ship] = { health, hits, isSunk };
    });
    return fleetStatus;
  }

  // Register a hit on a ship
  function registerHit(x, y) {
    if (gameboard.board[x][y] === 'water') {
      gameboard.board[x][y] = 'miss';
    } else if (gameboard.board[x][y] in shipLengths) {
      const ship = gameboard.board[x][y];
      gameboard.board[x][y] = 'hit';
      gameboard.fleet[ship].hitShip(x, y);
      gameboard.fleet.health -= 1;
    }
    if (isFleetSunk()) {
      sinkAllShips();
      gameboard.gameOver = true;
    }
  }

  function getBoard() {
    return gameboard.board;
  }

  function getPlayer() {
    return gameboard.player;
  }

  function isGameOver() {
    return gameboard.gameOver;
  }

  return {
    getPlayer, getBoard, placeShip, getFleetStatus, registerHit, isGameOver,
  };
}
