import pageManager from '../controllers/pageManager';
import gameStateManager from '../controllers/gameStateManager.js';
import synthesizeElement from '../utils/synthesizeElement';

// Create a "Play Now" button that sets the game state to 'placement'
const playNowButtonEl = () => {
  const el = synthesizeElement('button', { id: 'placement-button' });
  el.textContent = 'Play Now';
  el.addEventListener('click', () => { pageManager.setPage('placement'); });
  return el;
};

// Create a "Go to initial" button that sets the game state to 'initial'
const initialButtonEl = () => {
  const el = synthesizeElement('button', { id: 'initial-button' });
  el.textContent = 'Start Over';
  el.addEventListener('click', () => { pageManager.setPage('initial'); gameStateManager.resetPlayerFleets(); });
  return el;
};

// Creates a "Go to gameOver" button that sets the game state to 'gameOver'
const gameOverButtonEl = () => {
  const el = synthesizeElement('button', { id: 'game-over-button' });
  el.textContent = 'Go to gameOver';
  el.addEventListener('click', () => { pageManager.setPage('gameOver'); });
  return el;
};

export {
  playNowButtonEl,
  initialButtonEl,
  gameOverButtonEl,
};
