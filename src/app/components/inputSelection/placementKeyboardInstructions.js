import synthesizeElement from '../../utils/synthesizeElement';

// Keyboard instructions for switching placement options
const placementKeyboardInstructionsEl = () => {
  const el = synthesizeElement('div', { id: 'rotation-instructions' });
  el.textContent = 'R to change ship orientation, Q/E to change ship type';
  return el;
};

export default placementKeyboardInstructionsEl;
