import pageManager from '../controllers/pageManager';

export default function checkPlacementCompleteness(gameboard) {
  console.log('transition check');
  if (gameboard.isPlacementFinished() === true) {
    console.log('transitioning');
    pageManager.setPage('shooting');
  }
}
