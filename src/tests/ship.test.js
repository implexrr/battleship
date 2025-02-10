import ship from '../ships';

// Ship lengths for all ship types
const shipLengths = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

// Utility to dynamically create and test ships
const testShipCreation = (orientation, player) => {
  const ships = {};
  describe(`creates all ${orientation} ship types correctly for ${player}`, () => {
    Object.keys(shipLengths).forEach((shipType) => {
      ships[`${shipType}`] = ship(0, 0, orientation, shipType, player);
    });

    test.each(Object.keys(shipLengths))(
      `creates ${orientation} %s with proper length for ${player}`,
      (shipType) => {
        expect(ships[shipType].getShipLength()).toBe(shipLengths[shipType]);
        expect(ships[shipType].getPlayer()).toBe(player);
      },
    );
  });
};

// Dynamically run tests for all combinations
['vertical', 'horizontal'].forEach((orientation) => {
  ['p1', 'p2'].forEach((player) => {
    testShipCreation(orientation, player);
  });
});
