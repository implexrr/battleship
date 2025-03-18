import gameStateManager from '../gameStateManager';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Shooting Phase';
  return el;
};

const genGoToInitialButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

const genGoToGameOverButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to gameOver';
  el.addEventListener('click', () => { gameStateManager.setState('gameOver'); });
  return el;
};

const shootingPageEls = () => {
  const els = [genTitleEl(), genGoToInitialButton(), genGoToGameOverButton()];
  return els;
};

gameStateManager.registerState('shooting', shootingPageEls);
