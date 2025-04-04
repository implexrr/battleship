import synthesizeElement from '../utils/synthesizeElement';

// Creates the main container element for holding a board
const boardContainerEl = (player) => {
  const el = synthesizeElement('div', { id: `${player}-board-container`, class: 'board-container' });
  return el;
};

export default boardContainerEl;
