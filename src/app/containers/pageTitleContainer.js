import synthesizeElement from '../utils/synthesizeElement';

const pageTitleContainerEl = () => {
  const el = synthesizeElement('div', { id: 'page-title-container', class: 'container' });
  return el;
};

export default pageTitleContainerEl;
