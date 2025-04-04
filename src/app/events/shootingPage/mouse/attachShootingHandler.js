import gameManager from '../../../controllers/gameManager';
import pageManager from '../../../controllers/pageManager';
import aiShooter from '../../../controllers/aiShooter';

function transitionToEndPage(gameboard) {
  if (gameboard.isGameOver()) {
    gameManager.setWinner('player');
    pageManager.setPage('gameOver');
  }
}

function hitAiBoard(gameboard, cell, boardMatrix, i, j) {
  gameboard.registerHit(i, j);
  cell.setAttribute('cell-type', boardMatrix[i][j]);
}

function hitPlayerBoard() {
  const gameboard = gameManager.getBoard('player');
  const boardMatrix = gameManager.getBoardMatrix('player');
  const shot = aiShooter.getNextShot();
  const i = shot[0];
  const j = shot[1];
  const cell = gameManager.getCell('player', i, j);
  gameboard.registerHit(i, j);
  cell.setAttribute('cell-type', boardMatrix[i][j]);
}

export default function attachShootingHandler(cell, gameboard, boardMatrix, i, j) {
  cell.addEventListener('click', () => {
    hitAiBoard(gameboard, cell, boardMatrix, i, j);
    hitPlayerBoard();
    transitionToEndPage(gameboard);
  });
}
