import gameStateManager from '../controllers/gameStateManager';

// Create a "Play Now" button that sets the game state to 'placement'
const playNowButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Play Now';
  el.addEventListener('click', () => { gameStateManager.setState('placement'); });
  return el;
};

// Create a "Go to initial" button that sets the game state to 'initial'
const initialButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

// Creates a "Go to gameOver" button that sets the game state to 'gameOver'
const gameOverButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to gameOver';
  el.addEventListener('click', () => { gameStateManager.setState('gameOver'); });
  return el;
};

export {
  playNowButtonEl,
  initialButtonEl,
  gameOverButtonEl,
};
