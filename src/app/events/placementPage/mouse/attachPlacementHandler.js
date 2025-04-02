import placementOptionsManager from '../../../controllers/placementOptionsManager';
import { colorShip } from '../../../services/color';
import checkPlacementCompleteness from '../../../services/checkPlacementCompleteness';
import showWarning from '../../../services/showWarning';

// Attaches a click handler to a board cell for placing a ship
export default function attachPlacementHandler(cell, gameboard, cellMap) {
  cell.addEventListener('click', () => {
    const { orientation, shipType } = placementOptionsManager.getPlacementState();
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    try {
      // Attempts to place the ship on the gameboard at the clicked position
      gameboard.placeShip(row, col, orientation, shipType);
      // Visually updates the UI to reflect the placed ship
      colorShip(cellMap, row, col, orientation, shipType);
      // Checks to see if placement is complete, then transitions to the shooting page if it is
      checkPlacementCompleteness(gameboard);
    } catch (err) {
      // Logs error and prints current gameboard state for debugging
      console.error(`${err}`);
      console.log(gameboard.getBoard());
      showWarning(err.message);
    }
  });
}
