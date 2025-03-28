import { getPlacementState } from '../controllers/optionsController';
import { SHIP_LENGTHS } from '../gameMechanics/ships';
import { GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';

function handleMouseEnter(e, cellMap) {
  const { orientation, shipType } = getPlacementState();
  const row = Number(e.target.dataset.row);
  const col = Number(e.target.dataset.col);
  if (orientation === 'horizontal') {
    const upperBound = Math.min(col + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = col; i < upperBound; i += 1) {
      cellMap[row][i].classList.add('hovered');
    }
  } else {
    const upperBound = Math.min(row + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = row; i < upperBound; i += 1) {
      cellMap[i][col].classList.add('hovered');
    }
  }
}

function handleMouseLeave(e, cellMap) {
  const { orientation, shipType } = getPlacementState();
  const row = Number(e.target.dataset.row);
  const col = Number(e.target.dataset.col);
  if (orientation === 'horizontal') {
    const upperBound = Math.min(col + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = col; i < upperBound; i += 1) {
      cellMap[row][i].classList.remove('hovered');
    }
  } else {
    const upperBound = Math.min(row + SHIP_LENGTHS[shipType], GAMEBOARD_LENGTH);
    for (let i = row; i < upperBound; i += 1) {
      cellMap[i][col].classList.remove('hovered');
    }
  }
}

export { handleMouseEnter, handleMouseLeave };
