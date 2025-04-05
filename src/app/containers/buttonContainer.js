import synthesizeElement from '../utils/synthesizeElement';

// Creates a container to hold buttons
const buttonContainerEl = () => {
  const el = synthesizeElement('div', { id: 'button-container', class: 'container' });
  return el;
};

export default buttonContainerEl;
