import synthesizeElement from '../utils/synthesizeElement';

const boardsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'boards-container-el', class: 'container' });
  return el;
};

export default boardsContainerEl;
