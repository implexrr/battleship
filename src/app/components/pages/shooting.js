import gameStateManager from '../../controllers/gameStateManager';
import { gameOverButtonEl, initialButtonEl } from '../buttons';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Shooting Phase';
  return el;
};

const shootingPageEls = () => {
  const els = [genTitleEl(), initialButtonEl(), gameOverButtonEl()];
  return els;
};

gameStateManager.registerState('shooting', shootingPageEls);
