import gameStateManager from '../../../controllers/gameStateManager';
import startOverButtonEl from './button';

// Generates the title element for the "Game Over" screen
const titleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Shooting Phase';
  return el;
};

// Returns an array of DOM elements to render for the "Shooting" state
const shootingPageEls = () => {
  const els = [titleEl(), startOverButtonEl()];
  return els;
};

/*
  Registers this set of elements with the game state manager

  Note to self:
  We're importing the state manager here and registering the state externally.
  This avoids needing to import this file inside `gameStateManager.js`,
  which would cause a circular dependency.

  This structure keeps state registration modular and decoupled.
*/
gameStateManager.registerState('shooting', shootingPageEls);

export default shootingPageEls;
