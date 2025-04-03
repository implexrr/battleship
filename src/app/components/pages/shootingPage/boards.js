import synthesizeElement from '../../../utils/synthesizeElement';
import { boardsContainerEl } from '../../../containers';
import * as services from '../../../services';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../../gameMechanics/gameBoard';
import cellEl from '../../cell';
import gameStateManager from '../../../controllers/gameStateManager.js';

const playerCellMap = {};

function getPlayerCellMap() {
  return playerCellMap;
}

// Generates the AI's game board and repopulates it
const aiBoardEl = () => {
  const gameboard = initializeGameboard('ai');
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'board ai' });

  // Repopulates the AI board
  const fleetCoord = gameStateManager.getPlayerFleets().ai;
  Object.keys(fleetCoord).forEach((ship) => {
    gameboard.placeShip(
      fleetCoord[ship].row,
      fleetCoord[ship].col,
      fleetCoord[ship].orientation,
      ship,
    );
  });

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'ai', 'water');
      services.updateCellMap(cellMap, i, j, cell);
      el.append(cell);
    }
  }
  return el;
};

// Generates the player's game board and repopulates it
const playerBoardEl = () => {
  const gameboard = initializeGameboard('player');
  const boardMatrix = gameboard.getBoard();
  const cellMap = {};
  const el = synthesizeElement('div', { class: 'board player' });

  // Repopulates the player board
  const fleetCoord = gameStateManager.getPlayerFleets().player;
  Object.keys(fleetCoord).forEach((ship) => {
    gameboard.placeShip(
      fleetCoord[ship].row,
      fleetCoord[ship].col,
      fleetCoord[ship].orientation,
      ship,
    );
  });

  // Generate and append each cell based on the board matrix
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = cellEl(i, j, 'player', boardMatrix[i][j]);
      services.updateCellMap(cellMap, i, j, cell);
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
