import gameStateManager from '../gameStateManager';

const genGoToPlacementButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to placement';
  el.addEventListener('click', () => { gameStateManager.setState('placement'); });
  return el;
};

const genInitialPageEl = () => {
  const el = document.createElement('div');
  el.textContent = 'Initial page';
  el.append(genGoToPlacementButton());
  return el;
};

// NTS: The state manager object is being imported, then altered directly in this file, thus
// eliminating the need to import initial.js in the gameStateManager.js file.
// This removes the cyclic dependency I was struggling with earlier.
gameStateManager.registerState('initial', genInitialPageEl);
