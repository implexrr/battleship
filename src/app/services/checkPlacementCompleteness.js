import pageManager from '../controllers/pageManager';

export default function checkPlacementCompleteness(gameboard) {
  if (gameboard.isPlacementFinished() === true) {
    pageManager.setPage('shooting');
  }
}
