import synthesizeElement from '../utils/synthesizeElement';

// Creates a container for ship placement options (e.g., orientation, ship type)
const placementOptionsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'placement-options-container', class: 'container' });
  return el;
};

export default placementOptionsContainerEl;
