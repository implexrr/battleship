import { resultsContainerEl } from '../../../containers';
import synthesizeElement from '../../../utils/synthesizeElement';

const resultsText = (winner) => {
  const el = synthesizeElement('div', { id: 'results' });
  el.textContent = (winner === 'player1') ? 'Player wins!' : 'CPU Wins!';
  return el;
};

const resultsEl = (winner) => {
  const el = resultsContainerEl();
  el.append(resultsText(winner));
  return el;
};

export default resultsEl;
