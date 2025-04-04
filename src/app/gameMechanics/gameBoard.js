import { SHIP_LENGTHS } from './ships';
import { initializeFleet, MAX_FLEET_HEALTH } from './fleet';
import createEmptyBoard from './emptyBoard';
import isShipPlaceable from './validatePlacement';
import fleetCoordManager from '../controllers/fleetCoordManager';

const GAMEBOARD_LENGTH = 10;

// Initializes gameboard
function initializeGameboard(player) {
  let gameboard = createEmptyBoard(GAMEBOARD_LENGTH);
  let fleet = initializeFleet();
  let gameOver = false;

  // Resets all major gameboard related variables
  function resetGameboard() {
    gameboard = createEmptyBoard(GAMEBOARD_LENGTH);
    fleet = initializeFleet();
    gameOver = false;
  }

  // Places ship and adds it to player fleet
  function placeShip(row, col, orientation, shipType) {
    const shipPlaceability = isShipPlaceable(
      fleet,
      gameboard,
      GAMEBOARD_LENGTH,
      row,
      col,
      orientation,
      shipType,
    );
    if (shipPlaceability !== true) {
      throw new Error(`${shipPlaceability}`);
    }
    if (orientation === 'horizontal') {
      for (let i = col; i < col + SHIP_LENGTHS[shipType]; i += 1) {
        gameboard[row][i] = shipType;
      }
    } else {
      for (let j = row; j < row + SHIP_LENGTHS[shipType]; j += 1) {
        gameboard[j][col] = shipType;
      }
    }
    fleet.addToFleet(row, col, orientation, shipType);
    fleetCoordManager.recordShipCoord(player, row, col, orientation, shipType);
  }

  // Changes status of all "hit" ship tiles to 'wreckage'
  function sinkAllShips() {
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
        if (gameboard[i][j] === 'hit') {
          gameboard[i][j] = 'wreckage';
        }
      }
    }
  }

  // Registers a hit on a ship
  function registerHit(x, y) {
    if (gameboard[x][y] === 'water') {
      gameboard[x][y] = 'miss';
    } else if (gameboard[x][y] in SHIP_LENGTHS) {
      const ship = gameboard[x][y];
      gameboard[x][y] = 'hit';
      fleet.hitShip(x, y, ship);
    }
    if (fleet.isFleetSunk()) {
      sinkAllShips();
      gameOver = true;
    }
  }

  function placeWreckage(x, y) {
    gameboard[x][y] = 'wreckage';
  }

  // Checks to see if a ship is properly placed in a given location
  function isShipFullyHere(row, col, orientation, shipType) {
    // Check parameters for validity
    if (!(shipType in SHIP_LENGTHS)) {
      throw new Error('Not a ship type');
    }
    if (orientation !== 'horizontal' && orientation !== 'vertical') {
      throw new Error('Not a valid orientation');
    }

    // Checks if matrix cell value matches ship name
    if (orientation === 'horizontal') {
      for (let i = col; i < col + SHIP_LENGTHS[shipType]; i += 1) {
        if (gameboard[row][i] !== shipType) {
          return false;
        }
      }
    } else {
      for (let i = row; i < row + SHIP_LENGTHS[shipType]; i += 1) {
        if (gameboard[i][col] !== shipType) {
          return false;
        }
      }
    }

    // Checks if ship has full HP
    const fleetStatus = fleet.getFleetStatus();
    if (SHIP_LENGTHS[shipType] !== fleetStatus[shipType].healthLeft) {
      return false;
    }
    return true;
  }

  function getFleetHealth() {
    return fleet.getFleetHealth();
  }

  function getFleetStatus() {
    return fleet.getFleetStatus();
  }

  function getBoard() {
    return gameboard;
  }

  function getPlayer() {
    return player;
  }

  function isPlacementFinished() {
    return fleet.getFleetHealth() === MAX_FLEET_HEALTH;
  }

  function isFleetSunk() {
    return fleet.isFleetSunk();
  }

  function isGameOver() {
    return gameOver;
  }

  function getFleetCoordinates() {
    return fleet.getFleetCoordinates();
  }

  return {
    placeShip,
    registerHit,
    resetGameboard,
    placeWreckage,
    isShipFullyHere,
    getFleetHealth,
    getFleetStatus,
    getBoard,
    getPlayer,
    isPlacementFinished,
    isFleetSunk,
    isGameOver,
    getFleetCoordinates,
  };
}

export { GAMEBOARD_LENGTH, initializeGameboard };
