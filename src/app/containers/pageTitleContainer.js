import synthesizeElement from '../utils/synthesizeElement';

// Creates a container for the page title section
const pageTitleContainerEl = (pageName) => {
  const el = synthesizeElement('div', { id: `${pageName}-page-title-container`, class: 'container' });
  return el;
};

export default pageTitleContainerEl;
