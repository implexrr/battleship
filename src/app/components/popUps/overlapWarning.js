import synthesizeElement from '../../utils/synthesizeElement';

const overlapWarningEl = () => {
  const el = synthesizeElement('div', { id: 'overlap-warning', class: 'warning' });
  el.textContent = 'Ship placement overlaps with another ship.';
  return el;
};

export default overlapWarningEl;
