import gameStateManager from '../gameStateManager';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Game over';
  return el;
};

const genGoToInitialButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

const gameOverPageEls = () => {
  const els = [genTitleEl(), genGoToInitialButton()];
  return els;
};

gameStateManager.registerState('gameOver', gameOverPageEls);
