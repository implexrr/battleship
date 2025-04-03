import pageManager from '../../../controllers/pageManager';
import startOverButtonEl from './button';
import { boardsEl } from './boards';

// Returns an array of DOM elements to render for the "Shooting" state
const shootingPageEls = () => {
  const els = [boardsEl(), startOverButtonEl()];
  return els;
};

/*
  Registers this set of elements with the game state manager

  Note to self:
  We're importing the state manager here and registering the state externally.
  This avoids needing to import this file inside `pageManager.js`,
  which would cause a circular dependency.

  This structure keeps state registration modular and decoupled.
*/
pageManager.registerPage('shooting', shootingPageEls);

export default shootingPageEls;
