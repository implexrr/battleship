import { boardsContainerEl } from '../../../containers';
import populateGameboard from '../../../services/populate';
import { colorBoard, colorShip } from '../../../services/color';
import synthesizeElement from '../../../utils/synthesizeElement';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from './cell';
import getPlacementState from '../../../controllers/optionsController';

function storeCell(cellMap, row, col, cell) {
  // eslint-disable-next-line no-param-reassign
  if (!cellMap[row]) cellMap[row] = {};
  // eslint-disable-next-line no-param-reassign
  cellMap[row][col] = cell;
}

function attachPlacementHandler(cell, gameboard, cellMap) {
  cell.addEventListener('click', () => {
    const { orientation, shipType } = getPlacementState();
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);

    try {
      gameboard.placeShip(row, col, orientation, shipType);
      colorShip(cellMap, row, col, orientation, shipType);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  });
}

const aiBoardEl = () => {
  const gameboard = initializeGameboard('ai');
  const boardMatrix = gameboard.getBoard();
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'board ai' });

  populateGameboard(gameboard);

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', boardMatrix[i][j]);
      storeCell(cellMap, i, j, cell);
      el.append(cell);
    }
  }

  colorBoard(cellMap, boardMatrix);

  return el;
};

const playerBoardEl = () => {
  const gameboard = initializeGameboard('player');
  const boardMatrix = gameboard.getBoard();
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'player' });

  el.setAttribute('class', 'board player');

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'player', boardMatrix[i][j]);
      storeCell(cellMap, i, j, cell);
      attachPlacementHandler(cell, gameboard, cellMap);
      el.append(cell);
    }
  }
  return el;
};

const boardsEl = () => {
  const el = boardsContainerEl();
  el.append(playerBoardEl(), aiBoardEl());
  return el;
};

export default boardsEl;
