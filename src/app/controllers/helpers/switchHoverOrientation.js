import extractCellMap from './extractCellMap';
import { SHIP_LENGTHS } from '../../gameMechanics/ships';
import { GAMEBOARD_LENGTH } from '../../gameMechanics/gameBoard';

// Changes horizontal ship hover to vertical ship hover
function horizontalToVertical(oldRow, oldCol, oldShipType, cellMap) {
  const removeHoverEndPoint = Math.min(oldCol + SHIP_LENGTHS[oldShipType], GAMEBOARD_LENGTH);
  const addHoverEndPoint = Math.min(oldRow + SHIP_LENGTHS[oldShipType], GAMEBOARD_LENGTH);
  for (let i = oldCol; i < removeHoverEndPoint; i += 1) {
    cellMap[oldRow][i].classList.remove('hovered');
  }
  for (let i = oldRow; i < addHoverEndPoint; i += 1) {
    cellMap[i][oldCol].classList.add('hovered');
  }
}

// Changes vertical ship hover to horizontal ship hover
function verticalToHorizontal(oldRow, oldCol, oldShipType, cellMap) {
  const removeHoverEndPoint = Math.min(oldRow + SHIP_LENGTHS[oldShipType], GAMEBOARD_LENGTH);
  const addHoverEndPoint = Math.min(oldCol + SHIP_LENGTHS[oldShipType], GAMEBOARD_LENGTH);
  for (let i = oldRow; i < removeHoverEndPoint; i += 1) {
    cellMap[i][oldCol].classList.remove('hovered');
  }
  for (let i = oldCol; i < addHoverEndPoint; i += 1) {
    cellMap[oldRow][i].classList.add('hovered');
  }
}

// Switches which cells are hovered according to orientation if mouse is over board
export default function switchHoverOrientation(mouseX, mouseY, oldOrientation, oldShipType) {
  const board = document.querySelector('.player.board');
  const isMouseOverBoard = board?.matches(':hover');

  if (isMouseOverBoard) {
    const hoveredElement = document.elementFromPoint(mouseX, mouseY);
    const cellMap = extractCellMap();
    const oldRow = Number(hoveredElement.dataset.row);
    const oldCol = Number(hoveredElement.dataset.col);
    if (oldOrientation === 'horizontal') {
      horizontalToVertical(oldRow, oldCol, oldShipType, cellMap);
    } else {
      verticalToHorizontal(oldRow, oldCol, oldShipType, cellMap);
    }
  }
}
