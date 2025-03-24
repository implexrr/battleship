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

function colorBoard(player, boardMatrix) {
  const cells = document.querySelectorAll(`.cell.${player}`);
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].setAttribute('cell-type', boardMatrix[cells[i].dataset.row][cells[i].dataset.col]);
  }
}

const genPlayerBoardEl = (player) => {
  const gameboard = initializeGameboard(player);
  const boardMatrix = gameboard.getBoard();
  const el = document.createElement('div');
  el.setAttribute('class', `board ${player}`);
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = synthesizeElement('div', {
        'data-row': i,
        'data-col': j,
        class: `cell ${player}`,
        'cell-type': boardMatrix[i][j],
      });
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
          colorBoard(player, gameboard.getBoard());
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
  const el = document.createElement('div');
  el.setAttribute('class', 'board AI');
  const cellMap = {};
  const boardMatrix = gameboard.getBoard();

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

  const shipLengthsCopy = Object.keys({ ...SHIP_LENGTHS });
  const orientations = ['horizontal', 'vertical'];
  while (shipLengthsCopy.length > 0) {
    const row = Math.floor(Math.random() * 10);
    const col = Math.floor(Math.random() * 10);
    const orientation = orientations[Math.floor(Math.random() * 2)];
    try {
      gameboard.placeShip(row, col, orientation, shipLengthsCopy[0]);
      console.log(`${shipLengthsCopy[0]} placed`);
      const deleted = shipLengthsCopy.shift();
      console.log(`${deleted} deleted`);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      cellMap[i][j].setAttribute('cell-type', boardMatrix[i][j]);
    }
  }

  return el;
};

const placementPageEls = () => {
  const els = [genTitleEl(), genPlayerBoardEl('player1'), genAIBoardEl(), genPlacementModeOptionsEl(), genShipTypeOptionsEl(), initialButtonEl(), shootingButtonEl()];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
