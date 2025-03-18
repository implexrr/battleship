import gameStateManager from '../gameStateManager';

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

const genPlacementPageEl = () => {
  const el = document.createElement('div');
  el.textContent = 'Placement page';
  el.append(genGoToInitialButton());
  el.append(genGoToShootingButton());
  return el;
};

gameStateManager.registerState('placement', genPlacementPageEl);
