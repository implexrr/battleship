import { makeShip, shipLengths } from './ships';

export default function initializeFleet() {
  let health = 0;
  const ships = {};

  function addToFleet(x, y, orientation, shipType) {
    const newShip = makeShip(x, y, orientation, shipType);
    health += shipLengths[shipType];
    ships[shipType] = newShip;
  }

  function isFleetSunk() {
    return health <= 0;
  }

  function getFleetStatus() {
    const fleetStatus = {};
    Object.keys(ships).forEach((ship) => {
      const length = ships[ship].getShipLength();
      const hits = ships[ship].getHits();
      const healthLeft = length - hits;
      const isSunk = ships[ship].isShipSunk();
      fleetStatus[ship] = {
        length, hits, healthLeft, isSunk,
      };
    });
    return fleetStatus;
  }

  function getFleetHealth() {
    return health;
  }

  return {
    ships, addToFleet, isFleetSunk, getFleetStatus, getFleetHealth,
  };
}
