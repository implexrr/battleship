import gameStateManager from '../../../controllers/gameStateManager.js';
import pageManager from '../../../controllers/pageManager';

function transitionToEndPage(gameboard) {
  if (gameboard.isGameOver()) {
    gameStateManager.setWinner('player');
    pageManager.setPage('gameOver');
  }
}

function hitAiBoard(gameboard, cell, boardMatrix, i, j) {
  gameboard.registerHit(i, j);
  cell.setAttribute('cell-type', boardMatrix[i][j]);
}

function hitPlayerBoard(gameboard, cell, boardMatrix, i, j) {
  // TDL
  console.log('hitting player board');
}

export default function attachShootingHandler(cell, gameboard, boardMatrix, i, j) {
  cell.addEventListener('click', () => {
    hitAiBoard(gameboard, cell, boardMatrix, i, j);
    hitPlayerBoard();
    transitionToEndPage(gameboard);
  });
}
