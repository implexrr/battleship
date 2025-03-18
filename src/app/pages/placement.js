import gameStateManager from '../gameStateManager';

const genTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
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
  const els = [genTitleEl(), genGoToInitialButton(), genGoToShootingButton()];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
