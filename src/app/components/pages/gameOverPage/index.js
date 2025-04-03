import pageManager from '../../../controllers/pageManager';
import resultsEl from './results';
import startOverButtonEl from './button';

// Returns an array of DOM elements to render for the "Game Over" state
const gameOverPageEls = () => {
  const els = [resultsEl('player1'), startOverButtonEl()];
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
pageManager.registerPage('gameOver', gameOverPageEls);

export default gameOverPageEls;
