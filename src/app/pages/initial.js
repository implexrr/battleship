import gameStateManager from '../gameStateManager';

const genTitleEl = () => {
  const el = document.createElement('h1');
  el.textContent = 'Battleship';
  return el;
};

const genPlayNowButton = () => {
  const el = document.createElement('button');
  el.textContent = 'Play Now';
  el.addEventListener('click', () => { gameStateManager.setState('placement'); });
  return el;
};

const initialPageEls = () => {
  const els = [genTitleEl(), genPlayNowButton()];
  return els;
};

// NTS: The state manager object is being imported, then altered directly in this file, thus
// eliminating the need to import initial.js in the gameStateManager.js file.
// This removes the cyclic dependency I was struggling with earlier.
gameStateManager.registerState('initial', initialPageEls);
