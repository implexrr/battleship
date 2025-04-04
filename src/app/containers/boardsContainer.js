import synthesizeElement from '../utils/synthesizeElement';

// Creates the main container element for holding both boards
const boardsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'boards-container', class: 'container' });
  return el;
};

export default boardsContainerEl;
