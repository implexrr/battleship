import synthesizeElement from '../../utils/synthesizeElement';

// Warns players that duplicate ships aren't allowed
const duplicatePlacementWarningEl = () => {
  const el = synthesizeElement('div', { id: 'duplicate-warning', class: 'warning' });
  el.textContent = 'Can\'t place two of the same ship.';
  return el;
};

export default duplicatePlacementWarningEl;
