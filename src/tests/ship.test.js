import { makeShip, SHIP_LENGTHS } from '../app/gameMechanics/ships';

// Utility to dynamically create and test ships
const testShipCreation = (orientation) => {
  let ships;
  // Reinitialize ships object for each test
  beforeEach(() => {
    ships = {};
    Object.keys(SHIP_LENGTHS).forEach((shipType) => {
      ships[`${shipType}`] = makeShip(0, 0, orientation, shipType);
    });
  });

  // Check to see if a ship is created with the proper length
  describe(`creates all ${orientation} ship types correctly`, () => {
    test.each(Object.keys(SHIP_LENGTHS))(
      `creates ${orientation} %s with proper length`,
      (shipType) => {
        expect(ships[shipType].getShipLength()).toBe(SHIP_LENGTHS[shipType]);
      },
    );
  });

  // Check to see if a ship is sunk when its health reaches 0
  describe(`sinks all ${orientation} ships correctly upon max hits`, () => {
    test.each(Object.keys(SHIP_LENGTHS))(`${orientation} %s properly sunk upon receiving max hits`, (shipType) => {
      expect(ships[shipType].isSunk()).toBe(false); // Before firing shots
      Object.keys(ships[shipType].getShipCoord()).forEach((sectionCoord) => {
        const [x, y] = sectionCoord.split(',').map(Number);
        ships[shipType].hitShip(x, y);
      });
      expect(ships[shipType].isSunk()).toBe(true);
    });
  });
};

// Check the tests above for every possible orientation and placement coordinate pair
['vertical', 'horizontal'].forEach((orientation) => {
  testShipCreation(orientation);
});
