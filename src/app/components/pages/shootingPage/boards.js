import synthesizeElement from '../../../utils/synthesizeElement';
import { boardContainerEl, boardsContainerEl } from '../../../containers';
import { GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from '../../cell';
import boardLabelEl from '../../labels/boardLabel';
import attachShootingHandler from '../../../events/shootingPage/mouse/attachShootingHandler';
import gameManager from '../../../controllers/gameManager';

// Generates the AI's game board and repopulates it
const aiBoardEl = () => {
  console.log('generating ai board');
  const boardMatrix = gameManager.getBoardMatrix('ai');
  const gameboard = gameManager.getBoard('ai');
  const el = synthesizeElement('div', { class: 'board ai' });

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', 'water', 'shooting');
      gameManager.updateCellMap('ai', i, j, cell);
      attachShootingHandler(cell, gameboard, boardMatrix, i, j);
      el.append(cell);
    }
  }
  return el;
};

// Generates the player's game board and repopulates it
const playerBoardEl = () => {
  console.log('generating player board');
  const boardMatrix = gameManager.getBoardMatrix('player');
  const el = synthesizeElement('div', { class: 'board player' });

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'player', boardMatrix[i][j], 'shooting');
      gameManager.updateCellMap('player', i, j, cell);
      el.append(cell);
    }
  }
  return el;
};

const aiBoardContainerEl = () => {
  const el = boardContainerEl('ai');
  el.append(boardLabelEl('ai'), aiBoardEl());
  return el;
};

const playerBoardContainerEl = () => {
  const el = boardContainerEl('player');
  el.append(boardLabelEl('player'), playerBoardEl());
  return el;
};

// Combines the AI and player boards into a single container element
const boardsEl = () => {
  const el = boardsContainerEl();
  el.append(playerBoardContainerEl(), aiBoardContainerEl());
  return el;
};

export default boardsEl;
