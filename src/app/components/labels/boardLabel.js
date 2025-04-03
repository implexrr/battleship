import synthesizeElement from '../../utils/synthesizeElement';

// Creates the main container element for holding both boards
const boardLabelEl = (player) => {
  const el = synthesizeElement('div', { id: `${player}-board-label`, class: 'board-label' });
  el.textContent = (player === 'ai') ? 'CPU' : 'Player';
  return el;
};

export default boardLabelEl;
