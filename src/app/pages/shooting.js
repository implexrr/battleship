import gameStateManager from '../gameStateManager';

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

const genShootingPageEl = () => {
  const el = document.createElement('div');
  el.textContent = 'Shooting page';
  el.append(genGoToInitialButton());
  el.append(genGoToGameOverButton());
  return el;
};

gameStateManager.registerState('shooting', genShootingPageEl);
