import gameStateManager from '../../../controllers/gameStateManager';
import { playNowButtonEl } from '../../buttons';

// Generates the title element for the "Play Now" screen
const titleEl = () => {
  const el = document.createElement('h1');
  el.textContent = 'Battleship';
  return el;
};

// Returns an array of DOM elements to render for the "Play Now" state
const initialPageEls = () => {
  const els = [titleEl(), playNowButtonEl()];
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
gameStateManager.registerState('initial', initialPageEls);

export default initialPageEls;
