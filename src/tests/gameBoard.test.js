import fs from 'fs';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../app/gameMechanics/gameBoard';
import { SHIP_LENGTHS } from '../app/gameMechanics/ships';

// Create a writable stream to 'error.log', using 'w' flag to overwrite the file
const errorLogStream = fs.createWriteStream('error.log', { flags: 'w' });

// Override console.error to write to the file error.log
console.error = (...args) => {
  errorLogStream.write(`${args.map((arg) => (typeof arg === 'string' ? arg : JSON.stringify(arg))).join(' ')}\n`);
};

// Check if ships are placed properly for every possible orientation and coordinate pair
const testPlacement = (orientation) => {
  const gameboard = initializeGameboard('player1');
  beforeEach(() => {
    gameboard.resetGameboard();
  });
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      describe(`places ${orientation} ships correctly`, () => {
        test.each(Object.keys(SHIP_LENGTHS))(`Correctly places ${orientation} %s at ${i}, ${j}`, (shipType) => {
          try { gameboard.placeShip(i, j, orientation, shipType); } catch (error) { console.error('Error:', error.message); }
          if (((orientation === 'horizontal') && (j + SHIP_LENGTHS[shipType] > GAMEBOARD_LENGTH))
            || ((orientation === 'vertical') && (i + SHIP_LENGTHS[shipType] > GAMEBOARD_LENGTH))) {
            expect(gameboard.isShipFullyHere(i, j, orientation, shipType)).toBe(false);
          } else { expect(gameboard.isShipFullyHere(i, j, orientation, shipType)).toBe(true); }
        });
      });
    }
  }
};

// Check if ships are placed properly given arbitrary wreckage lines
const testPlacementWithWreckage = (orientation, hLine1, hLine2, vLine1, vLine2) => {
  const gameboard = initializeGameboard('player1');
  beforeEach(() => {
    gameboard.resetGameboard();
    for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
      gameboard.placeWreckage(hLine1, i);
      gameboard.placeWreckage(hLine2, i);
      gameboard.placeWreckage(i, vLine1);
      gameboard.placeWreckage(i, vLine2);
    }
  });
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      describe(`places ${orientation} ships correctly with wreckage lines v: (${vLine1}, ${vLine2}), h: (${hLine1}, ${hLine2})`, () => {
        test.each(Object.keys(SHIP_LENGTHS))(`Correctly places ${orientation} %s at ${i}, ${j} with wreckage lines v: (${vLine1}, ${vLine2}), h: (${hLine1}, ${hLine2})`, (shipType) => {
          try { gameboard.placeShip(i, j, orientation, shipType); } catch (error) { console.error('Error:', error.message); }
          if (
            (i === hLine1) // starts on hLine1
            || (i === hLine2) // starts on hLine2
            || (j === vLine1) // starts on vLine1
            || (j === vLine2) // starts on vLine2
            || ((orientation === 'horizontal') && (j + SHIP_LENGTHS[shipType] > vLine1 && vLine1 > j)) // crosses vLine1
            || ((orientation === 'horizontal') && (j + SHIP_LENGTHS[shipType] > vLine2 && vLine2 > j)) // crosses vLine2
            || ((orientation === 'horizontal') && (j + SHIP_LENGTHS[shipType] > GAMEBOARD_LENGTH)) // exceeds gameboard horizontally
            || ((orientation === 'vertical') && (i + SHIP_LENGTHS[shipType] > hLine1 && hLine1 > i)) // crosses hLine1
            || ((orientation === 'vertical') && (i + SHIP_LENGTHS[shipType] > hLine2 && hLine2 > i)) // crosses hLine2
            || ((orientation === 'vertical') && (i + SHIP_LENGTHS[shipType] > GAMEBOARD_LENGTH)) // exceeds gameboard vertically
          ) {
            expect(gameboard.isShipFullyHere(i, j, orientation, shipType)).toBe(false);
          } else { expect(gameboard.isShipFullyHere(i, j, orientation, shipType)).toBe(true); }
        });
      });
    }
  }
};

const playGame1 = () => {
  const gameboardP1 = initializeGameboard('player1');
  const gameboardP2 = initializeGameboard('player2');
  describe('ships placed correctly', () => {
    beforeAll(() => {
      try { gameboardP1.placeShip(5, 5, 'vertical', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(5, 5, 'vertical', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(7, 3, 'horizontal', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(7, 3, 'diagonal', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(7, 3, 'horizontal', 'reee'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(0, 1, 'horizontal', 'battleship'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(3, 2, 'vertical', 'battleship'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(1, 2, 'vertical', 'cruiser'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(2, 1, 'horizontal', 'cruiser'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(3, 4, 'vertical', 'submarine'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(1, 0, 'horizontal', 'submarine'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(5, 6, 'horizontal', 'destroyer'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(9, 9, 'vertical', 'destroyer'); } catch (err) { console.error('Error caught:', err.message); }
    });
    test('p1 carrier placed correctly', () => {
      expect(gameboardP1.isShipFullyHere(5, 5, 'vertical', 'carrier')).toBe(true);
    });
    test('p2 carrier placed correctly', () => {
      expect(gameboardP2.isShipFullyHere(7, 3, 'horizontal', 'carrier')).toBe(true);
    });

    test('p1 battleship placed correctly', () => {
      expect(gameboardP1.isShipFullyHere(0, 1, 'horizontal', 'battleship')).toBe(true);
    });
    test('p2 battleship placed correctly', () => {
      expect(gameboardP2.isShipFullyHere(3, 2, 'vertical', 'battleship')).toBe(true);
    });

    test('p1 cruiser placed correctly', () => {
      expect(gameboardP1.isShipFullyHere(1, 2, 'vertical', 'cruiser')).toBe(true);
    });
    test('p2 cruiser placed correctly', () => {
      expect(gameboardP2.isShipFullyHere(2, 1, 'horizontal', 'cruiser')).toBe(true);
    });

    test('p1 submarine placed correctly', () => {
      expect(gameboardP1.isShipFullyHere(3, 4, 'vertical', 'submarine')).toBe(true);
    });
    test('p2 submarine placed correctly', () => {
      expect(gameboardP2.isShipFullyHere(1, 0, 'horizontal', 'submarine')).toBe(true);
    });

    test('p1 destroyer placed correctly', () => {
      expect(gameboardP1.isShipFullyHere(5, 6, 'horizontal', 'destroyer')).toBe(true);
    });
    test('p2 destroyer placed correctly', () => {
      expect(gameboardP2.isShipFullyHere(9, 9, 'vertical', 'destroyer')).toBe(true);
    });
  });
  describe('game played properly', () => {
    beforeAll(() => {
      let finalP1PositionReached = false;
      const finalXPos = 6;
      const finalYPos = 9;
      for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
        for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
          gameboardP1.registerHit(i, j);
          gameboardP2.registerHit(i, j);
          if (i === finalYPos && j === finalXPos) {
            finalP1PositionReached = true;
            break;
          }
          if (finalP1PositionReached === true) { break; }
        }
      }
    });
    test('p1 fleet fully sunk', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(true);
    });
    test('p2 fleet still alive', () => {
      expect(gameboardP2.fleet.isFleetSunk()).toBe(false);
    });
    test('p1gameboard turned into wreckage', () => {
      const board1 = gameboardP1.getBoard();
      let wreckedCount = 0;
      let hitEncountered = false;
      for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
        for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
          if (board1[i][j] === 'wreckage') { wreckedCount += 1; }
          if (board1[i][j] === 'hit') { hitEncountered = true; }
        }
      }
      expect(wreckedCount).toBe(15);
      expect(hitEncountered).toBe(false);
    });
    test('p2 fleet still has HP', () => {
      expect(gameboardP2.fleet.getFleetHealth() > 0).toBe(true);
    });
    test('p1 has lost game', () => {
      expect(gameboardP1.isGameOver()).toBe(true);
    });
    test('p2 has not lost game', () => {
      expect(gameboardP2.isGameOver()).toBe(false);
    });
  });
};

const playGame2 = () => {
  const gameboardP1 = initializeGameboard('player1');
  const gameboardP2 = initializeGameboard('player2');
  describe('ships placed correctly', () => {
    beforeAll(() => {
      try { gameboardP1.placeShip(0, 0, 'vertical', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(0, 1, 'vertical', 'battleship'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(0, 2, 'vertical', 'cruiser'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(0, 3, 'vertical', 'submarine'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP1.placeShip(0, 4, 'vertical', 'destroyer'); } catch (err) { console.error('Error caught:', err.message); }

      try { gameboardP2.placeShip(0, 0, 'horizontal', 'carrier'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(1, 0, 'horizontal', 'battleship'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(2, 0, 'horizontal', 'cruiser'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(3, 0, 'horizontal', 'submarine'); } catch (err) { console.error('Error caught:', err.message); }
      try { gameboardP2.placeShip(4, 0, 'horizontal', 'destroyer'); } catch (err) { console.error('Error caught:', err.message); }
    });
    test('p1 carrier placed correctly', () => { expect(gameboardP1.isShipFullyHere(0, 0, 'vertical', 'carrier')).toBe(true); });
    test('p1 battleship placed correctly', () => { expect(gameboardP1.isShipFullyHere(0, 1, 'vertical', 'battleship')).toBe(true); });
    test('p1 cruiser placed correctly', () => { expect(gameboardP1.isShipFullyHere(0, 2, 'vertical', 'cruiser')).toBe(true); });
    test('p1 submarine placed correctly', () => { expect(gameboardP1.isShipFullyHere(0, 3, 'vertical', 'submarine')).toBe(true); });
    test('p1 destroyer placed correctly', () => { expect(gameboardP1.isShipFullyHere(0, 4, 'vertical', 'destroyer')).toBe(true); });

    test('p2 carrier placed correctly', () => { expect(gameboardP2.isShipFullyHere(0, 0, 'horizontal', 'carrier')).toBe(true); });
    test('p2 battleship placed correctly', () => { expect(gameboardP2.isShipFullyHere(1, 0, 'horizontal', 'battleship')).toBe(true); });
    test('p2 cruiser placed correctly', () => { expect(gameboardP2.isShipFullyHere(2, 0, 'horizontal', 'cruiser')).toBe(true); });
    test('p2 submarine placed correctly', () => { expect(gameboardP2.isShipFullyHere(3, 0, 'horizontal', 'submarine')).toBe(true); });
    test('p2 destroyer placed correctly', () => { expect(gameboardP2.isShipFullyHere(4, 0, 'horizontal', 'destroyer')).toBe(true); });
  });

  describe('game played properly', () => {
    test('p1 carrier sunk', () => {
      gameboardP1.registerHit(0, 0);
      expect(gameboardP1.fleet.getFleetStatus().carrier.healthLeft).toBe(4);
      gameboardP1.registerHit(1, 0);
      expect(gameboardP1.fleet.getFleetStatus().carrier.healthLeft).toBe(3);
      gameboardP1.registerHit(2, 0);
      expect(gameboardP1.fleet.getFleetStatus().carrier.healthLeft).toBe(2);
      gameboardP1.registerHit(3, 0);
      expect(gameboardP1.fleet.getFleetStatus().carrier.healthLeft).toBe(1);
      gameboardP1.registerHit(4, 0);
      expect(gameboardP1.fleet.getFleetStatus().carrier.healthLeft).toBe(0);
    });
    test('carrier health subtracted from fleet health', () => {
      expect(gameboardP1.fleet.getFleetHealth()).toBe(10);
    });
    test('p1 fleet still alive', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(false);
    });

    test('p1 battleship sunk', () => {
      gameboardP1.registerHit(0, 1);
      expect(gameboardP1.fleet.getFleetStatus().battleship.healthLeft).toBe(3);
      gameboardP1.registerHit(1, 1);
      expect(gameboardP1.fleet.getFleetStatus().battleship.healthLeft).toBe(2);
      gameboardP1.registerHit(2, 1);
      expect(gameboardP1.fleet.getFleetStatus().battleship.healthLeft).toBe(1);
      gameboardP1.registerHit(3, 1);
      expect(gameboardP1.fleet.getFleetStatus().battleship.healthLeft).toBe(0);
    });
    test('battleship health subtracted from fleet health', () => {
      expect(gameboardP1.fleet.getFleetHealth()).toBe(6);
    });
    test('p1 fleet still alive', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(false);
    });

    test('p1 cruiser sunk', () => {
      gameboardP1.registerHit(0, 2);
      expect(gameboardP1.fleet.getFleetStatus().cruiser.healthLeft).toBe(2);
      gameboardP1.registerHit(1, 2);
      expect(gameboardP1.fleet.getFleetStatus().cruiser.healthLeft).toBe(1);
      gameboardP1.registerHit(2, 2);
      expect(gameboardP1.fleet.getFleetStatus().cruiser.healthLeft).toBe(0);
    });
    test('cruiser health subtracted from fleet health', () => {
      expect(gameboardP1.fleet.getFleetHealth()).toBe(3);
    });
    test('p1 fleet still alive', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(false);
    });

    test('p1 submarine sunk', () => {
      gameboardP1.registerHit(0, 3);
      expect(gameboardP1.fleet.getFleetStatus().submarine.healthLeft).toBe(1);
      gameboardP1.registerHit(1, 3);
      expect(gameboardP1.fleet.getFleetStatus().submarine.healthLeft).toBe(0);
    });
    test('submarine health subtracted from fleet health', () => {
      expect(gameboardP1.fleet.getFleetHealth()).toBe(1);
    });
    test('p1 fleet still alive', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(false);
    });

    test('p1 destroyer sunk', () => {
      gameboardP1.registerHit(0, 4);
      expect(gameboardP1.fleet.getFleetStatus().destroyer.healthLeft).toBe(0);
    });
    test('destroyer health subtracted from fleet health', () => {
      expect(gameboardP1.fleet.getFleetHealth()).toBe(0);
    });
    test('p1 fleet has been sunk', () => {
      expect(gameboardP1.fleet.isFleetSunk()).toBe(true);
    });
  });

  test('p2 carrier sunk', () => {
    gameboardP2.registerHit(0, 0);
    expect(gameboardP2.fleet.getFleetStatus().carrier.healthLeft).toBe(4);
    gameboardP2.registerHit(0, 1);
    expect(gameboardP2.fleet.getFleetStatus().carrier.healthLeft).toBe(3);
    gameboardP2.registerHit(0, 2);
    expect(gameboardP2.fleet.getFleetStatus().carrier.healthLeft).toBe(2);
    gameboardP2.registerHit(0, 3);
    expect(gameboardP2.fleet.getFleetStatus().carrier.healthLeft).toBe(1);
    gameboardP2.registerHit(0, 4);
    expect(gameboardP2.fleet.getFleetStatus().carrier.healthLeft).toBe(0);
  });
  test('carrier health subtracted from fleet health', () => {
    expect(gameboardP2.fleet.getFleetHealth()).toBe(10);
  });
  test('p2 fleet still alive', () => {
    expect(gameboardP2.fleet.isFleetSunk()).toBe(false);
  });

  test('p2 battleship sunk', () => {
    gameboardP2.registerHit(1, 0);
    expect(gameboardP2.fleet.getFleetStatus().battleship.healthLeft).toBe(3);
    gameboardP2.registerHit(1, 1);
    expect(gameboardP2.fleet.getFleetStatus().battleship.healthLeft).toBe(2);
    gameboardP2.registerHit(1, 2);
    expect(gameboardP2.fleet.getFleetStatus().battleship.healthLeft).toBe(1);
    gameboardP2.registerHit(1, 3);
    expect(gameboardP2.fleet.getFleetStatus().battleship.healthLeft).toBe(0);
  });
  test('battleship health subtracted from fleet health', () => {
    expect(gameboardP2.fleet.getFleetHealth()).toBe(6);
  });
  test('p2 fleet still alive', () => {
    expect(gameboardP2.fleet.isFleetSunk()).toBe(false);
  });

  test('p2 cruiser sunk', () => {
    gameboardP2.registerHit(2, 0);
    expect(gameboardP2.fleet.getFleetStatus().cruiser.healthLeft).toBe(2);
    gameboardP2.registerHit(2, 1);
    expect(gameboardP2.fleet.getFleetStatus().cruiser.healthLeft).toBe(1);
    gameboardP2.registerHit(2, 2);
    expect(gameboardP2.fleet.getFleetStatus().cruiser.healthLeft).toBe(0);
  });
  test('cruiser health subtracted from fleet health', () => {
    expect(gameboardP2.fleet.getFleetHealth()).toBe(3);
  });
  test('p2 fleet still alive', () => {
    expect(gameboardP2.fleet.isFleetSunk()).toBe(false);
  });

  test('p2 submarine sunk', () => {
    gameboardP2.registerHit(3, 0);
    expect(gameboardP2.fleet.getFleetStatus().submarine.healthLeft).toBe(1);
    gameboardP2.registerHit(3, 1);
    expect(gameboardP2.fleet.getFleetStatus().submarine.healthLeft).toBe(0);
  });
  test('submarine health subtracted from fleet health', () => {
    expect(gameboardP2.fleet.getFleetHealth()).toBe(1);
  });
  test('p2 fleet still alive', () => {
    expect(gameboardP2.fleet.isFleetSunk()).toBe(false);
  });

  test('p2 destroyer sunk', () => {
    gameboardP2.registerHit(4, 0);
    expect(gameboardP2.fleet.getFleetStatus().submarine.healthLeft).toBe(0);
  });
  test('destroyer health subtracted from fleet health', () => {
    expect(gameboardP2.fleet.getFleetHealth()).toBe(0);
  });
  test('p2 fleet has been sunk', () => {
    expect(gameboardP2.fleet.isFleetSunk()).toBe(true);
  });
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

playGame1();
playGame2();
