import { makeShip } from './ships';

const MAX_FLEET_HEALTH = 15;

// Initializes a fleet object with the ability to add/get status of ships
export default function initializeFleet() {
  // Sets up empty objects to store ships and their associated values
  const ships = {};
  const coord = {};

  // Makes ship, then adds ship to ships object
  function addToFleet(x, y, orientation, shipType) {
    const newShip = makeShip(x, y, orientation, shipType);
    ships[shipType] = newShip;
    coord[shipType] = { x, y };
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

  // Return ocject with ships and their starting coordinates as the keyval pairs
  function getFleetCoordinates() {
    return coord;
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
    getFleetCoordinates,
  };
}

export { MAX_FLEET_HEALTH, initializeFleet };
