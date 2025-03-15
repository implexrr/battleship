import './main.css';
import initializeGameboard from './game/gameBoard';
import { shipLengths } from './game/ships';

// 4 states this webpage will take
// 1. initialPage, only has a playGame button and some filler html elements with basic css
  // playGame wipes initialPage component, generates gameboard components
// 2. ship placement screen
  // generate gameboard component
  // turn ship placement mode on, shooting mode off
// 3. shooting screen
  // turn shooting mode on, ship placement mode off
// 4. game over/play again screen
  // generate gameOverPage component, with playAgain button that generates initialPage component


function changeGameState(newGameState) {
  if (newGameState === 'initial') { renderInitial(); }
  else if (newGameState === 'placement') { renderPlacement(); }
  else if (newGameState === 'shooting') { renderShooting(); }
  else if (newGameState === 'gameOver') { renderGameOver(); }
}

const goToInitialButton = () => {
  const el = document.createElement('button');
  el.addEventListener('click', renderInitial);
  return el;
};

const goToPlacementButton = () => {
  const el = document.createElement('button');
  el.addEventListener('click', renderPlacement);
  return el;
};

const goToShootingButton = () => {
  const el = document.createElement('button');
  el.addEventListener('click', renderShooting);
  return el;
};

const goToGameOverButton = () => {
  const el = document.createElement('button');
  el.addEventListener('click', renderGameOver);
  return el;
};

function renderInitial() {
  // create gotoPlacement button
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = 'Initial page';
  bodyEl.append(goToPlacementButton());
}

function renderPlacement() {
  // create gotoShooting button
  // create gotoInitial button
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = 'Placement page';
  bodyEl.append(goToShootingButton());
  bodyEl.append(goToInitialButton());
}

function renderShooting() {
  // create gotoGameOver button
  // create gotoInitial button
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = 'Shooting page';
  bodyEl.append(goToGameOverButton());
  bodyEl.append(goToInitialButton());
}

function renderGameOver() {
  // create gotoInitial button
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = 'Game over page';
  bodyEl.append(goToInitialButton);
}

renderInitial();
