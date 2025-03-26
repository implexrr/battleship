import { SHIP_LENGTHS } from '../gameMechanics/ships';

// Randomly places all ship onto the gameboard matrix without overlaps
export default function populateGameboardMatrix(gameboard) {
  // Create a mutable copy of ship types to track what's left to place
  const shipLengthsCopy = Object.keys({ ...SHIP_LENGTHS });
  const orientations = ['horizontal', 'vertical'];

  // Attempts to place each ship one by one
  while (shipLengthsCopy.length > 0) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const orientation = orientations[Math.floor(Math.random() * 2)];
    try {
      // Try placing the next ship in a random location/orientation
      gameboard.placeShip(row, col, orientation, shipLengthsCopy[0]);
      shipLengthsCopy.shift();
    } catch (err) {
      // Placement failed (e.g., overlap or out-of-bounds) — try again
      console.error(`Error: ${err}`);
    }
  }
}
