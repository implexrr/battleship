import synthesizeElement from '../../utils/synthesizeElement';

// Warns players that ship being placed here would overlap with another ship
const overlapWarningEl = () => {
  const el = synthesizeElement('div', { id: 'overlap-warning', class: 'warning' });
  el.textContent = 'Ship placement overlaps with another ship.';
  return el;
};

export default overlapWarningEl;
