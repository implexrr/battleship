import gameStateManager from '../../gameStateManager';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../../gameMechanics/gameBoard';
import genPlacementModeOptionsEl from '../inputSelection/orientationOptions';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

const genBoardEl = (player) => {
  const gameboard = initializeGameboard(player);
  const el = document.createElement('div');
  el.setAttribute('class', `board-container ${player}`);
  for (let i = 0; i < GAMEBOARD_LENGTH; i += 1) {
    for (let j = 0; j < GAMEBOARD_LENGTH; j += 1) {
      const cell = document.createElement('div');
      cell.setAttribute('data-row', i);
      cell.setAttribute('data-col', j);
      cell.setAttribute('class', `cell ${player}`);
      cell.addEventListener('click', () => {
        const orientation = document.querySelector('input[name="orientation"]:checked').value;
        // const shipType = document.querySelector('input[name="shipType"]:checked').value;
        try {
          gameboard.placeShip(
            Number(cell.dataset.row),
            Number(cell.dataset.col),
            orientation,
            'cruiser',
          );
        } catch (err) {
          console.error(`Error: ${err}`);
        } finally {
          console.log(gameboard.getBoard());
          gameboard.changePlacementMode(orientation);
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
  const els = [genTitleEl(), genBoardEl('player1'), genPlacementModeOptionsEl(), genGoToInitialButton(), genGoToShootingButton()];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
