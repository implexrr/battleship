import synthesizeElement from '../utils/synthesizeElement';

// Creates the main container element for holding both player boards
const resultsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'results-container', class: 'container' });
  return el;
};

export default resultsContainerEl;
