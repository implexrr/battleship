import gameStateManager from '../../gameStateManager';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../gameMechanics/gameBoard';
import genPlacementModeOptionsEl from '../inputSelection/orientationOptions';
import genShipTypeOptionsEl from '../inputSelection/shipTypeOptions';
import synthesizeElement from '../../utils/synthesizeElement';
import { SHIP_LENGTHS } from '../../gameMechanics/ships';
import { initialButtonEl, shootingButtonEl } from '../buttons';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

function colorBoard(cellMap, boardMatrix) {
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      cellMap[i][j].setAttribute('cell-type', boardMatrix[i][j]);
    }
  }
}

function colorShip(cellMap, x, y, orientation, shipType) {
  if (orientation === 'horizontal') {
    for (let i = y; i < y + SHIP_LENGTHS[shipType]; i += 1) {
      cellMap[x][i].setAttribute('cell-type', shipType);
    }
  } else {
    for (let i = x; i < x + SHIP_LENGTHS[shipType]; i += 1) {
      cellMap[i][y].setAttribute('cell-type', shipType);
    }
  }
}

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
        const orientation = document.querySelector('input[name="orientation"]:checked').value;
        const shipType = document.querySelector('input[name="shipType"]:checked').value;
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

function populateGameboard(gameboard) {
  const shipLengthsCopy = Object.keys({ ...SHIP_LENGTHS });
  const orientations = ['horizontal', 'vertical'];
  while (shipLengthsCopy.length > 0) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const orientation = orientations[Math.floor(Math.random() * 2)];
    try {
      gameboard.placeShip(row, col, orientation, shipLengthsCopy[0]);
      shipLengthsCopy.shift();
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }
}

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
