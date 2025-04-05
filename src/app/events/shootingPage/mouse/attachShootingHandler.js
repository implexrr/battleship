import { gameManager, aiShooter } from '../../../controllers';
import pageManager from '../../../controllers/pageManager';

// Navigates to game over screen and sets winner if either player or AI has lost game
function transitionToEndPage() {
  if (gameManager.getBoard('player').isGameOver()) { gameManager.setWinner('ai'); pageManager.setPage('gameOver'); }
  if (gameManager.getBoard('ai').isGameOver()) { gameManager.setWinner('player'); pageManager.setPage('gameOver'); }
}

// Register hit on AI board and updates clicked cell with hit or miss
function hitAiBoard(gameboard, cell, boardMatrix, i, j) {
  gameboard.registerHit(i, j);
  cell.setAttribute('cell-type', boardMatrix[i][j]);
}

// Lets AI take shot at player board, then updates cell to reflect result of shot
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

/* Attaches a click handler to a given cell on the AI's board.
  When clicked:
    - The player's shot is registered on the AI board.
    - The AI immediately takes its turn to shoot the player.
    - The game checks whether the game is over.
*/
export default function attachShootingHandler(cell, gameboard, boardMatrix, i, j) {
  cell.addEventListener('click', () => {
    hitAiBoard(gameboard, cell, boardMatrix, i, j);
    hitPlayerBoard();
    transitionToEndPage(gameboard);
  });
}
