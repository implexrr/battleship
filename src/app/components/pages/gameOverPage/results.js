import { resultsContainerEl } from '../../../containers';
import synthesizeElement from '../../../utils/synthesizeElement';
import gameStateManager from '../../../controllers/gameStateManager.js';

const resultsText = () => {
  const winner = gameStateManager.getWinner();
  console.log(winner);
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
