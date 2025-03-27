import getPlacementState from '../controllers/optionsController';
import { colorShip } from './color';
// import showWarning from './showWarning';

function showWarning(warningType) {
  const warningEl = document.querySelector(`#${warningType}-warning`);
  warningEl.classList.add('visible');
  setTimeout(() => {
    warningType.classList.remove('visible');
  }, 3000); // auto-hide after 3 seconds
}

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
      // TDL: Warn user about duplicate placement
      // TDL: Auto-transition to shooting phase if all ships placed
    } catch (err) {
      // Logs error and prints current gameboard state for debugging
      console.error(`Error: ${err}`);
      console.log(gameboard.getBoard());
    }
  });
}
