import gameStateManager from '../../../controllers/gameStateManager.js';
import pageManager from '../../../controllers/pageManager';
import aiShooter from '../../../controllers/aiShooter';

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

function hitPlayerBoard() {
  // const shot = aiShooter.getNextShot();
  // const i = shot[0];
  // const j = shot[1];
  // gameboard.registerHit(i, j);
  // cell.setAttribute('cell-type', boardMatrix[i][j]);
}

export default function attachShootingHandler(cell, gameboard, boardMatrix, i, j) {
  cell.addEventListener('click', () => {
    hitAiBoard(gameboard, cell, boardMatrix, i, j);
    hitPlayerBoard(gameboard, cell, boardMatrix);
    transitionToEndPage(gameboard);
  });
}
