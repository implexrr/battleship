import { gameManager } from '../../../controllers';
import mousePosition from '../../../controllers/mousePosition';
import { SHIP_LENGTHS } from '../../../gameMechanics/ships';
import { GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';

// Removes hover highlight for old ship
function removeOldShipHover(orientation, hoverColStart, hoverRowStart, oldShip, cellMap) {
  if (orientation === 'horizontal') {
    // Calculate end hover column, clamped to game board boundaries
    const hoverColEnd = Math.min(hoverColStart + SHIP_LENGTHS[oldShip], GAMEBOARD_LENGTH);
    for (let i = hoverColStart; i < hoverColEnd; i += 1) {
      cellMap[hoverRowStart][i].classList.remove('hovered');
    }
  } else {
    // Calculate end hover row, clamped to game board boundaries
    const hoverRowEnd = Math.min(hoverRowStart + SHIP_LENGTHS[oldShip], GAMEBOARD_LENGTH);
    for (let i = hoverRowStart; i < hoverRowEnd; i += 1) {
      cellMap[i][hoverColStart].classList.remove('hovered');
    }
  }
}

// Adds hover highlight for new ship
function addNewShipHover(orientation, hoverColStart, hoverRowStart, newShip, cellMap) {
  if (orientation === 'horizontal') {
    // Calculate new end hover column, clamped to game board boundaries
    const newHoverColEnd = Math.min(hoverColStart + SHIP_LENGTHS[newShip], GAMEBOARD_LENGTH);
    for (let i = hoverColStart; i < newHoverColEnd; i += 1) {
      cellMap[hoverRowStart][i].classList.add('hovered');
    }
  } else {
    // Calculate new end hover row, clamped to game board boundaries
    const newHoverRowEnd = Math.min(hoverRowStart + SHIP_LENGTHS[newShip], GAMEBOARD_LENGTH);
    for (let i = hoverRowStart; i < newHoverRowEnd; i += 1) {
      cellMap[i][hoverColStart].classList.add('hovered');
    }
  }
}

// Updates hovered cells on player board when switching from one ship to another
export default function changeHoveredShipLength(oldShip, newShip, orientation) {
  // Extract mouse data
  const { mouseX, mouseY } = mousePosition.getMousePosition();
  const board = document.querySelector('.player.board');
  const isMouseOverBoard = board?.matches(':hover');

  // Only fires main part of function if mouse is over board
  if (isMouseOverBoard) {
    const cellMap = gameManager.getCellMap('player');
    const hoveredElement = document.elementFromPoint(mouseX, mouseY);
    const hoverRowStart = Number(hoveredElement.dataset.row);
    const hoverColStart = Number(hoveredElement.dataset.col);
    removeOldShipHover(orientation, hoverColStart, hoverRowStart, oldShip, cellMap);
    addNewShipHover(orientation, hoverColStart, hoverRowStart, newShip, cellMap);
  }
}
