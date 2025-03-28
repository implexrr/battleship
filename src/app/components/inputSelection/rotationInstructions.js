import synthesizeElement from '../../utils/synthesizeElement';

const rotationInstructionsEl = () => {
  const el = synthesizeElement('div', { id: 'rotation-instructions' });
  el.textContent = 'Press R to rotate ship';
  return el;
};

export default rotationInstructionsEl;
