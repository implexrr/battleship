import gameStateManager from '../../gameStateManager';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../gameMechanics/gameBoard';
import genPlacementModeOptionsEl from '../inputSelection/orientationOptions';
import genShipTypeOptionsEl from '../inputSelection/shipTypeOptions';
import synthesizeElement from '../../utils/synthesizeElement';

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

const genBoardEl = (player) => {
  const gameboard = initializeGameboard(player);
  const initialBoardMatrix = gameboard.getBoard();
  const el = document.createElement('div');
  el.setAttribute('class', `board ${player}`);
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = synthesizeElement('div', {
        'data-row': i,
        'data-col': j,
        class: `cell ${player}`,
        'cell-type': initialBoardMatrix[i][j],
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
        } finally {
          console.log(gameboard.getBoard());
        }
      });
      el.append(cell);
    }
  }
  return el;
};

const genGoToInitialButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

const genGoToShootingButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to shooting';
  el.addEventListener('click', () => { gameStateManager.setState('shooting'); });
  return el;
};

const placementPageEls = () => {
  const els = [genTitleEl(), genBoardEl('player1'), genPlacementModeOptionsEl(), genShipTypeOptionsEl(), genGoToInitialButton(), genGoToShootingButton()];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
