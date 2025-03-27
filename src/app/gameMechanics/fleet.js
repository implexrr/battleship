import { makeShip } from './ships';

const MAX_FLEET_HEALTH = 15;

// Initializes a fleet object with the ability to add/get status of ships
export default function initializeFleet() {
  // Sets up empty object to store ships and their associated values
  const ships = {};

  // Makes ship, then adds ship to ships object
  function addToFleet(x, y, orientation, shipType) {
    const newShip = makeShip(x, y, orientation, shipType);
    ships[shipType] = newShip;
  }

  // Checks if fleet is sunk
  function isFleetSunk() {
    let health = 0;
    Object.keys(ships).forEach((ship) => {
      health += ships[ship].getShipHealth();
    });
    if (health <= 0) {
      return true;
    }
    return false;
  }

  // Gives status report on each ship in the fleet
  function getFleetStatus() {
    const fleetStatus = {};
    Object.keys(ships).forEach((ship) => {
      const length = ships[ship].getShipLength();
      const hits = ships[ship].getHits();
      const healthLeft = length - hits;
      const isSunk = ships[ship].isSunk();
      fleetStatus[ship] = {
        length,
        hits,
        healthLeft,
        isSunk,
      };
    });
    return fleetStatus;
  }

  // Returns remaining health of fleet
  function getFleetHealth() {
    let health = 0;
    Object.keys(ships).forEach((ship) => {
      health += ships[ship].getShipHealth();
    });
    return health;
  }

  function hitShip(a, b, ship) {
    ships[ship].hitShip(a, b);
  }

  return {
    hitShip,
    addToFleet,
    isFleetSunk,
    getFleetStatus,
    getFleetHealth,
  };
}

export { MAX_FLEET_HEALTH, initializeFleet };
