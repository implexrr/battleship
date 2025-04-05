import synthesizeElement from '../../utils/synthesizeElement';

// Creates a label for a board, depending on the player
const boardLabelEl = (player) => {
  const el = synthesizeElement('div', { id: `${player}-board-label`, class: 'board-label' });
  el.textContent = (player === 'ai') ? 'CPU' : 'Player';
  return el;
};

export default boardLabelEl;
