import gameStateManager from '../../../controllers/gameStateManager';
import goToPlacementButtonEl from './button';

// Returns an array of DOM elements to render for the "Play Now" state
const initialPageEls = () => {
  const els = [goToPlacementButtonEl()];
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
