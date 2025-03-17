import gameStateManager from '../gameStateManager';

const genGoToInitialButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

const genGameOverPageEl = () => {
  const el = document.createElement('div');
  el.textContent = 'Game over page';
  el.append(genGoToInitialButton());
  return el;
};

gameStateManager.registerState('gameOver', genGameOverPageEl);
