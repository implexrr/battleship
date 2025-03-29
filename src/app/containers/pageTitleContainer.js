import synthesizeElement from '../utils/synthesizeElement';

// Creates a container for the page title section
const pageTitleContainerEl = () => {
  const el = synthesizeElement('div', { id: 'placement-page-title-container', class: 'container' });
  return el;
};

export default pageTitleContainerEl;
