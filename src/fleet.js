import { makeShip, shipLengths } from './ships';

export default function initializeFleet() {
  const ships = {};

  function addToFleet(x, y, orientation, shipType) {
    const newShip = makeShip(x, y, orientation, shipType);
    ships[shipType] = newShip;
  }

  function isFleetSunk() {
    let health = 0;
    Object.keys(ships).forEach((ship) => {
      health += ships[ship].getShipHealth();
    });
    if (health <= 0) {
      return true;
    } return false;
  }

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
