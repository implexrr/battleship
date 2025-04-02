import synthesizeElement from '../../utils/synthesizeElement';

const rotationInstructionsEl = () => {
  const el = synthesizeElement('div', { id: 'rotation-instructions' });
  el.textContent = 'R to change ship orientation, Q/E to change ship type';
  return el;
};

export default rotationInstructionsEl;
