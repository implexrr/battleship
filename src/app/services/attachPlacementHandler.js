import getPlacementState from '../controllers/optionsController';
import { colorShip } from './color';
import checkPlacementCompleteness from './checkPlacementCompleteness';
import showWarning from './showWarning';

// Attaches a click handler to a board cell for placing a ship
export default function attachPlacementHandler(cell, gameboard, cellMap) {
  cell.addEventListener('click', () => {
    const { orientation, shipType } = getPlacementState();
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    // TDL: Combine 2 TDLs below, gameboard.placeShip and colorShip into one fxn?
    try {
      // Attempts to place the ship on the gameboard at the clicked position
      gameboard.placeShip(row, col, orientation, shipType);
      // Visually updates the UI to reflect the placed ship
      colorShip(cellMap, row, col, orientation, shipType);
      checkPlacementCompleteness(gameboard);
    } catch (err) {
      // Logs error and prints current gameboard state for debugging
      console.error(`${err}`);
      console.log(gameboard.getBoard());
      showWarning(err.message);
    }
  });
}
