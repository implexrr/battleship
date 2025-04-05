import pageManager from '../controllers/pageManager';

// Transitions to shooting phase if player is finished placing ships
export default function checkPlacementCompleteness(gameboard) {
  console.log('transition check');
  if (gameboard.isPlacementFinished() === true) {
    console.log('transitioning');
    pageManager.setPage('shooting');
  }
}
