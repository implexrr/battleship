import gameStateManager from '../../controllers/gameStateManager';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../gameMechanics/gameBoard';
import genPlacementModeOptionsEl from '../inputSelection/orientationOptions';
import genShipTypeOptionsEl from '../inputSelection/shipTypeOptions';
import synthesizeElement from '../../utils/synthesizeElement';
import { initialButtonEl, shootingButtonEl } from '../buttons';
import { colorBoard, colorShip } from '../../services/color';
import populateGameboard from '../../services/populate';
import getPlacementState from '../../controllers/optionsController';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

const genPlayerBoardEl = (player) => {
  const gameboard = initializeGameboard(player);
  const boardMatrix = gameboard.getBoard();
  const el = document.createElement('div');
  const cellMap = {};
  el.setAttribute('class', `board ${player}`);
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = synthesizeElement('div', {
        'data-row': i,
        'data-col': j,
        class: `cell ${player}`,
        'cell-type': boardMatrix[i][j],
      });
      if (!cellMap[i]) cellMap[i] = {};
      cellMap[i][j] = cell;
      cell.addEventListener('click', () => {
        const { orientation, shipType } = getPlacementState();
        try {
          gameboard.placeShip(
            Number(cell.dataset.row),
            Number(cell.dataset.col),
            orientation,
            shipType,
          );
          colorShip(
            cellMap,
            Number(cell.dataset.row),
            Number(cell.dataset.col),
            orientation,
            shipType,
          );
        } catch (err) {
          console.error(`Error: ${err}`);
        }
      });
      el.append(cell);
    }
  }
  return el;
};

const genAIBoardEl = () => {
  const gameboard = initializeGameboard('AI');
  populateGameboard(gameboard);
  const cellMap = {};
  const boardMatrix = gameboard.getBoard();
  const el = synthesizeElement('div', { class: 'board AI' });

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = synthesizeElement('div', {
        'data-row': i,
        'data-col': j,
        class: 'cell AI',
        'cell-type': boardMatrix[i][j],
      });
      if (!cellMap[i]) cellMap[i] = {};
      cellMap[i][j] = cell;
      el.append(cell);
    }
  }

  colorBoard(cellMap, boardMatrix);

  return el;
};

const placementPageEls = () => {
  const els = [genTitleEl(), genPlayerBoardEl('player1'), genAIBoardEl(), genPlacementModeOptionsEl(), genShipTypeOptionsEl(), initialButtonEl(), shootingButtonEl()];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
