// TDL: Refactor imports
import synthesizeElement from '../../../utils/synthesizeElement';
import { boardsContainerEl } from '../../../containers';
import * as services from '../../../services';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from '../../cell';

// function attachPlacementHandler(cell, gameboard, cellMap) {
//   cell.addEventListener('click', () => {
//     const { orientation, shipType } = getPlacementState();
//     const row = Number(cell.dataset.row);
//     const col = Number(cell.dataset.col);

//     try {
//       gameboard.placeShip(row, col, orientation, shipType);
//       services.colorShip(cellMap, row, col, orientation, shipType);
//     } catch (err) {
//       console.error(`Error: ${err}`);
//       console.log(gameboard.getBoard());
//     }
//   });
// }

const aiBoardEl = () => {
  const gameboard = initializeGameboard('ai');
  const boardMatrix = gameboard.getBoard();
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'board ai' });

  services.populateGameboard(gameboard);

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', boardMatrix[i][j]);
      services.updateCellMap(cellMap, i, j, cell);
      el.append(cell);
    }
  }

  services.colorBoard(cellMap, boardMatrix);

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
      services.updateCellMap(cellMap, i, j, cell);
      services.attachPlacementHandler(cell, gameboard, cellMap);
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
