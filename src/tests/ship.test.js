import { ship, shipLengths } from '../ships';

// Utility to dynamically create and test ships
const testShipCreation = (orientation) => {
  const ships = {};
  describe(`creates all ${orientation} ship types correctly`, () => {
    Object.keys(shipLengths).forEach((shipType) => {
      ships[`${shipType}`] = ship(0, 0, orientation, shipType);
    });

    test.each(Object.keys(shipLengths))(
      `creates ${orientation} %s with proper length`,
      (shipType) => {
        expect(ships[shipType].getShipLength()).toBe(shipLengths[shipType]);
      },
    );
  });
};

// Dynamically run tests for all combinations
['vertical', 'horizontal'].forEach((orientation) => {
  testShipCreation(orientation);
});
