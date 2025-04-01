import synthesizeElement from '../../../utils/synthesizeElement';
import { boardsContainerEl } from '../../../containers';
import * as services from '../../../services';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from '../../cell';
import { handleMouseEnter, handleMouseLeave } from '../../../events/placementPage/mouse/mouseEvents';
import attachPlacementHandler from '../../../events/placementPage/mouse/attachPlacementHandler';

const playerCellMap = {};

function getPlayerCellMap() {
  return playerCellMap;
}

// Generates the AI's game board and populates it with randomly placed ships
const aiBoardEl = () => {
  const gameboard = initializeGameboard('ai');
  const boardMatrix = gameboard.getBoard();
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'board ai' });

  // Populates AI board with ships at random positions
  services.populateGameboardMatrix(gameboard);

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', boardMatrix[i][j]);
      services.updateCellMap(cellMap, i, j, cell);
      el.append(cell);
    }
  }

  // Sets the visual state of the board based on current matrix values
  services.colorBoard(cellMap, boardMatrix);

  return el;
};

// Generates the player's game board and enables interactive ship placement
const playerBoardEl = () => {
  const gameboard = initializeGameboard('player');
  const boardMatrix = gameboard.getBoard();
  const el = synthesizeElement('div', { class: 'player' });

  el.setAttribute('class', 'board player');

  // Generates and appends each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'player', boardMatrix[i][j]);
      services.updateCellMap(playerCellMap, i, j, cell);

      // Attach click handler for placing ships interactively
      attachPlacementHandler(cell, gameboard, playerCellMap);

      // Add hover handler for ship placement preview
      cell.addEventListener('mouseenter', (e) => {
        handleMouseEnter(e, playerCellMap);
      });
      cell.addEventListener('mouseleave', (e) => {
        handleMouseLeave(e, playerCellMap);
      });
      el.append(cell);
    }
  }
  return el;
};

// Combines the AI and player boards into a single container element
const boardsEl = () => {
  const el = boardsContainerEl();
  el.append(playerBoardEl(), aiBoardEl());
  return el;
};

export { getPlayerCellMap, boardsEl };
