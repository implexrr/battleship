import getPlacementState from '../controllers/optionsController';
import { colorShip } from './color';

export default function attachPlacementHandler(cell, gameboard, cellMap) {
  cell.addEventListener('click', () => {
    const { orientation, shipType } = getPlacementState();
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    try {
      gameboard.placeShip(row, col, orientation, shipType);
      colorShip(cellMap, row, col, orientation, shipType);
    } catch (err) {
      console.error(`Error: ${err}`);
      console.log(gameboard.getBoard());
    }
  });
}
