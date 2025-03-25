import gameStateManager from '../../controllers/gameStateManager';
import { initialButtonEl } from '../buttons';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Game over';
  return el;
};

const gameOverPageEls = () => {
  const els = [genTitleEl(), initialButtonEl()];
  return els;
};

gameStateManager.registerState('gameOver', gameOverPageEls);
