import synthesizeElement from '../utils/synthesizeElement';

// Creates the main container element for holding both player boards
const buttonContainerEl = () => {
  const el = synthesizeElement('div', { id: 'button-container', class: 'container' });
  return el;
};

export default buttonContainerEl;
