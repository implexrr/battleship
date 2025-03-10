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

// Dynamically run tests for all combinations
['vertical', 'horizontal'].forEach((orientation) => {
  testPlacement(orientation);
});
