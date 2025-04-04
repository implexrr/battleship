import mousePosition from '../../../controllers/mouse/mousePosition';
import { SHIP_LENGTHS } from '../../../gameMechanics/ships';
import { GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import gameManager from '../../../controllers/gameManager';

function removeOldShipHover(orientation, hoverColStart, hoverRowStart, oldShip, cellMap) {
  if (orientation === 'horizontal') {
    const hoverColEnd = Math.min(hoverColStart + SHIP_LENGTHS[oldShip], GAMEBOARD_LENGTH);
    for (let i = hoverColStart; i < hoverColEnd; i += 1) {
      cellMap[hoverRowStart][i].classList.remove('hovered');
    }
  } else {
    const hoverRowEnd = Math.min(hoverRowStart + SHIP_LENGTHS[oldShip], GAMEBOARD_LENGTH);
    for (let i = hoverRowStart; i < hoverRowEnd; i += 1) {
      cellMap[i][hoverColStart].classList.remove('hovered');
    }
  }
}

function addNewShipHover(orientation, hoverColStart, hoverRowStart, newShip, cellMap) {
  if (orientation === 'horizontal') {
    const newHoverColEnd = Math.min(hoverColStart + SHIP_LENGTHS[newShip], GAMEBOARD_LENGTH);
    for (let i = hoverColStart; i < newHoverColEnd; i += 1) {
      cellMap[hoverRowStart][i].classList.add('hovered');
    }
  } else {
    const newHoverRowEnd = Math.min(hoverRowStart + SHIP_LENGTHS[newShip], GAMEBOARD_LENGTH);
    for (let i = hoverRowStart; i < newHoverRowEnd; i += 1) {
      cellMap[i][hoverColStart].classList.add('hovered');
    }
  }
}

export default function changeHoveredShipLength(oldShip, newShip, orientation) {
  const { mouseX, mouseY } = mousePosition.getMousePosition();
  const board = document.querySelector('.player.board');
  const isMouseOverBoard = board?.matches(':hover');

  if (isMouseOverBoard) {
    const cellMap = gameManager.getCellMap('player');
    const hoveredElement = document.elementFromPoint(mouseX, mouseY);
    const hoverRowStart = Number(hoveredElement.dataset.row);
    const hoverColStart = Number(hoveredElement.dataset.col);
    removeOldShipHover(orientation, hoverColStart, hoverRowStart, oldShip, cellMap);
    addNewShipHover(orientation, hoverColStart, hoverRowStart, newShip, cellMap);
  }
}
