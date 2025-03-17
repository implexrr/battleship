import './main.css';
import initializeGameboard from './app/gameMechanics/gameBoard';
import { shipLengths } from './app/gameMechanics/ships';
// import changeGameState from './app/gameState';
// import gameStateManager from './app/gameStateManager';

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

// index.js
import './app/pages/initial';
import './app/pages/placement';
import './app/pages/shooting';
import './app/pages/gameOver';

import gameStateManager from './app/gameStateManager';

// Start by rendering the first page
gameStateManager.setState('initial');
