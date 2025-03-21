import gameStateManager from '../gameStateManager';
import { initializeGameboard, GAMEBOARD_LENGTH } from '../gameMechanics/gameBoard';

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
        try {
          gameboard.placeShip(Number(cell.dataset.row), Number(cell.dataset.col), orientation, 'cruiser');
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

const genHorizontalOptionEl = () => {
  const el = document.createElement('input');
  el.setAttribute('id', 'horizontalOption');
  el.setAttribute('type', 'radio');
  el.setAttribute('name', 'orientation');
  el.setAttribute('value', 'horizontal');
  el.checked = true;
  return el;
};

const genVerticalOptionEl = () => {
  const el = document.createElement('input');
  el.setAttribute('id', 'verticalOption');
  el.setAttribute('type', 'radio');
  el.setAttribute('name', 'orientation');
  el.setAttribute('value', 'vertical');
  return el;
};

const genHorizontalOptionLabelEl = () => {
  const el = document.createElement('label');
  el.setAttribute('for', 'horizontalOption');
  el.textContent = 'Horizontal';
  return el;
};

const genVerticalOptionLabelEl = () => {
  const el = document.createElement('label');
  el.setAttribute('for', 'verticalOption');
  el.textContent = 'Vertical';
  return el;
};

const genPlacementModeOptionsEl = () => {
  const el = document.createElement('div');
  el.append(
    genHorizontalOptionEl(),
    genHorizontalOptionLabelEl(),
    genVerticalOptionEl(),
    genVerticalOptionLabelEl(),
  );
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
