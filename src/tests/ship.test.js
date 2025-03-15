import { makeShip, shipLengths } from '../app/gameMechanics/ships';

// Utility to dynamically create and test ships
const testShipCreation = (orientation) => {
  let ships;
  beforeEach(() => {
    ships = {}; // Reinitialize `ships` for each test
    Object.keys(shipLengths).forEach((shipType) => {
      ships[`${shipType}`] = makeShip(0, 0, orientation, shipType);
    });
  });

  describe(`creates all ${orientation} ship types correctly`, () => {
    test.each(Object.keys(shipLengths))(
      `creates ${orientation} %s with proper length`,
      (shipType) => {
        expect(ships[shipType].getShipLength()).toBe(shipLengths[shipType]);
      },
    );
  });

  describe(`sinks all ${orientation} ships correctly upon max hits`, () => {
    test.each(Object.keys(shipLengths))(`${orientation} %s properly sunk upon receiving max hits`, (shipType) => {
      expect(ships[shipType].isSunk()).toBe(false); // Before firing shots
      Object.keys(ships[shipType].getShipCoord()).forEach((sectionCoord) => {
        const [x, y] = sectionCoord.split(',').map(Number);
        ships[shipType].hitShip(x, y);
      });
      expect(ships[shipType].isSunk()).toBe(true); // After firing shots
    });
  });
};

// Dynamically run tests for all combinations
['vertical', 'horizontal'].forEach((orientation) => {
  testShipCreation(orientation);
});
