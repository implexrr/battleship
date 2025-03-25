import gameStateManager from '../controllers/gameStateManager';

const playNowButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Play Now';
  el.addEventListener('click', () => { gameStateManager.setState('placement'); });
  return el;
};

const initialButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to initial';
  el.addEventListener('click', () => { gameStateManager.setState('initial'); });
  return el;
};

const shootingButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to shooting';
  el.addEventListener('click', () => { gameStateManager.setState('shooting'); });
  return el;
};

const gameOverButtonEl = () => {
  const el = document.createElement('button');
  el.textContent = 'Go to gameOver';
  el.addEventListener('click', () => { gameStateManager.setState('gameOver'); });
  return el;
};

export {
  playNowButtonEl,
  initialButtonEl,
  shootingButtonEl,
  gameOverButtonEl,
};
