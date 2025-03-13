import initializeGameboard from '../gameBoard';
import { shipLengths } from '../ships';
const GAMEBOARD_LENGTH = 10;

const testPlacement = (orientation) => {
  const gameboardP1 = initializeGameboard('player1');
  beforeEach(() => {
    gameboardP1.resetGameboard();
  });
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      describe(`places ${orientation} ships correctly`, () => {
        test.each(Object.keys(shipLengths))(`Correctly places ${orientation} %s at ${i}, ${j}`, (shipType) => {
          try {
            gameboardP1.placeShip(i, j, orientation, shipType);
          } catch {
            console.error('Can\'t place ship there');
          }
          if (((orientation === 'horizontal') && (j + shipLengths[shipType] > GAMEBOARD_LENGTH))
            || ((orientation === 'vertical') && (i + shipLengths[shipType] > GAMEBOARD_LENGTH))) {
            expect(gameboardP1.isShipFullyHere(i, j, orientation, shipType)).toBe(false);
          } else { expect(gameboardP1.isShipFullyHere(i, j, orientation, shipType)).toBe(true); }
        });
      });
    }
  }
};

const testPlacementWithWreckage = (orientation, hLine1, hLine2, vLine1, vLine2) => {
  const gameboardP1 = initializeGameboard('player1');
  beforeEach(() => {
    gameboardP1.resetGameboard();
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      gameboardP1.placeWreckage(hLine1, i);
      gameboardP1.placeWreckage(hLine2, i);
      gameboardP1.placeWreckage(i, vLine1);
      gameboardP1.placeWreckage(i, vLine2);
    }
  });
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      describe(`places ${orientation} ships correctly with wreckage lines v: (${vLine1}, ${vLine2}), h: (${hLine1}, ${hLine2})`, () => {
        test.each(Object.keys(shipLengths))(`Correctly places ${orientation} %s at ${i}, ${j} with wreckage lines v: (${vLine1}, ${vLine2}), h: (${hLine1}, ${hLine2})`, (shipType) => {
          try {
            gameboardP1.placeShip(i, j, orientation, shipType);
          } catch {
            console.error('Can\'t place ship there');
          }
          if (
            (i === hLine1) // starts on hLine1
            || (i === hLine2) // starts on hLine2
            || (j === vLine1) // starts on vLine1
            || (j === vLine2) // starts on vLine2
            || ((orientation === 'horizontal') && (j + shipLengths[shipType] > vLine1 && vLine1 > j)) // crosses vLine1
            || ((orientation === 'horizontal') && (j + shipLengths[shipType] > vLine2 && vLine2 > j)) // crosses vLine2
            || ((orientation === 'horizontal') && (j + shipLengths[shipType] > GAMEBOARD_LENGTH)) // exceeds gameboard horizontally
            || ((orientation === 'vertical') && (i + shipLengths[shipType] > hLine1 && hLine1 > i)) // crosses hLine1
            || ((orientation === 'vertical') && (i + shipLengths[shipType] > hLine2 && hLine2 > i)) // crosses hLine2
            || ((orientation === 'vertical') && (i + shipLengths[shipType] > GAMEBOARD_LENGTH)) // exceeds gameboard vertically
            // since vLines and hLines are always within the gameboard
            // the conditions above check for ships that exceed gameboard length
          ) {
            expect(gameboardP1.isShipFullyHere(i, j, orientation, shipType)).toBe(false);
          } else { expect(gameboardP1.isShipFullyHere(i, j, orientation, shipType)).toBe(true); }
        });
      });
    }
  }
};

// Dynamically run tests for all combinations
['vertical', 'horizontal'].forEach((orientation) => {
  testPlacement(orientation);
});

['vertical', 'horizontal'].forEach((orientation) => {
  testPlacementWithWreckage(orientation, 0, 9, 0, 9);
});

['vertical', 'horizontal'].forEach((orientation) => {
  testPlacementWithWreckage(orientation, 3, 6, 3, 6);
});

['vertical', 'horizontal'].forEach((orientation) => {
  testPlacementWithWreckage(orientation, 5, 5, 5, 5);
});

