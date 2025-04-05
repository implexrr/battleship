import { placementOptionsManager } from '../../../controllers';
import { SHIP_LENGTHS } from '../../../gameMechanics/ships';
import { GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';

/* Handles mouse hover effect when entering a cell.
   Highlights the cells that would be occupied by the currently selected ship.
*/
function handleMouseEnter(e, cellMap) {
  const { orientation, shipType } = placementOptionsManager.getPlacementState();
  const row = Number(e.target.dataset.row);
  const col = Number(e.target.dataset.col);
  if (orientation === 'horizontal') {
    // Calculate the rightmost cell to be hovered, within board bounds
    const upperBound = Math.min(col + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = col; i < upperBound; i += 1) {
      cellMap[row][i].classList.add('hovered');
    }
  } else {
    // Calculate the bottommost cell to be hovered, within board bounds
    const upperBound = Math.min(row + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = row; i < upperBound; i += 1) {
      cellMap[i][col].classList.add('hovered');
    }
  }
}

/* Handles removal of hover effect when leaving a cell.
   Clears the cells that would be occupied by the currently selected ship.
*/
function handleMouseLeave(e, cellMap) {
  const { orientation, shipType } = placementOptionsManager.getPlacementState();
  const row = Number(e.target.dataset.row);
  const col = Number(e.target.dataset.col);
  if (orientation === 'horizontal') {
    // Calculate the rightmost cell to have hover effect removed, within board bounds
    const upperBound = Math.min(col + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = col; i < upperBound; i += 1) {
      cellMap[row][i].classList.remove('hovered');
    }
  } else {
    // Calculate the bottommost cell to have hover effect removed, within board bounds
    const upperBound = Math.min(row + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = row; i < upperBound; i += 1) {
      cellMap[i][col].classList.remove('hovered');
    }
  }
}

export { handleMouseEnter, handleMouseLeave };
