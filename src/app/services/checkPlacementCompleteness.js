import gameStateManager from '../controllers/gameStateManager';

export default function checkPlacementCompleteness(gameboard) {
  if (gameboard.isPlacementFinished() === true) {
    gameStateManager.setState('shooting');
  }
}
