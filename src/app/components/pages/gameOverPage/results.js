import { resultsContainerEl } from '../../../containers';
import synthesizeElement from '../../../utils/synthesizeElement';
import { gameManager } from '../../../controllers';

// Generate text for whoever won the game
const resultsText = () => {
  const winner = gameManager.getWinner();
  const el = synthesizeElement('div', { id: 'results' });
  el.textContent = (winner === 'player') ? 'Player wins!' : 'CPU Wins!';
  return el;
};

const resultsEl = () => {
  const el = resultsContainerEl();
  el.append(resultsText());
  return el;
};

export default resultsEl;
