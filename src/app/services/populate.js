import { SHIP_LENGTHS } from '../gameMechanics/ships';

export default function populateGameboard(gameboard) {
  const shipLengthsCopy = Object.keys({ ...SHIP_LENGTHS });
  const orientations = ['horizontal', 'vertical'];
  while (shipLengthsCopy.length > 0) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const orientation = orientations[Math.floor(Math.random() * 2)];
    try {
      gameboard.placeShip(row, col, orientation, shipLengthsCopy[0]);
      shipLengthsCopy.shift();
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }
}
