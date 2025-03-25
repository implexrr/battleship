import synthesizeElement from '../utils/synthesizeElement';

const placementOptionsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'placement-options-container', class: 'container' });
  return el;
};

export default placementOptionsContainerEl;
