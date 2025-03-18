import { makeShip } from './ships';

// Initialize a fleet object with the ability to add/get status of ships
export default function initializeFleet() {
  // Set up empty object to store ships and their associated values
  const ships = {};

  // Make ship, then add ship to ships object
  function addToFleet(x, y, orientation, shipType) {
    const newShip = makeShip(x, y, orientation, shipType);
    ships[shipType] = newShip;
  }

  // Check if fleet is sunk
  function isFleetSunk() {
    let health = 0;
    Object.keys(ships).forEach((ship) => {
      health += ships[ship].getShipHealth();
    });
    if (health <= 0) {
      return true;
    } return false;
  }

  // Give status report on each ship in the fleet
  function getFleetStatus() {
    const fleetStatus = {};
    Object.keys(ships).forEach((ship) => {
      const length = ships[ship].getShipLength();
      const hits = ships[ship].getHits();
      const healthLeft = length - hits;
      const isSunk = ships[ship].isSunk();
      fleetStatus[ship] = {
        length, hits, healthLeft, isSunk,
      };
    });
    return fleetStatus;
  }

  // Return remaining health of fleet
  function getFleetHealth() {
    let health = 0;
    Object.keys(ships).forEach((ship) => {
      health += ships[ship].getShipHealth();
    });
    return health;
  }

  return {
    ships, addToFleet, isFleetSunk, getFleetStatus, getFleetHealth,
  };
}
