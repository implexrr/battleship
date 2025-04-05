import { gameManager } from '../../../controllers';
import synthesizeElement from '../../../utils/synthesizeElement';
import { boardContainerEl, boardsContainerEl } from '../../../containers';
import { GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from '../../cell';
import { handleMouseEnter, handleMouseLeave } from '../../../events/placementPage/mouse/mouseEvents';
import attachPlacementHandler from '../../../events/placementPage/mouse/attachPlacementHandler';
import boardLabelEl from '../../labels/boardLabel';

// Generates the AI's game board and populates it with randomly placed ships
const aiBoardEl = () => {
  const el = synthesizeElement('div', { class: 'board ai' });

  // Populates AI board with ships at random positions
  gameManager.populateGameboardMatrix('ai');

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', 'water', 'placement');
      gameManager.updateCellMap('ai', i, j, cell);
      el.append(cell);
    }
  }

  return el;
};

// Generates the player's game board and enables interactive ship placement
const playerBoardEl = () => {
  const boardMatrix = gameManager.getBoardMatrix('player');
  const gameboard = gameManager.getBoard('player');
  const cellMap = gameManager.getCellMap('player');

  const el = synthesizeElement('div', { class: 'board player' });

  // Generates and appends each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'player', boardMatrix[i][j], 'placement');
      gameManager.updateCellMap('player', i, j, cell);

      // Attach click handler for placing ships interactively
      attachPlacementHandler(cell, gameboard, cellMap);

      // Add hover handler for ship placement preview
      cell.addEventListener('mouseenter', (e) => {
        handleMouseEnter(e, cellMap);
      });
      cell.addEventListener('mouseleave', (e) => {
        handleMouseLeave(e, cellMap);
      });
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
