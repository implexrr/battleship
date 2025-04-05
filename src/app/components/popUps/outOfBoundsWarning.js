import synthesizeElement from '../../utils/synthesizeElement';

// Warns players that ships can't go outside the gameboard
const outOfBoundsWarningEl = () => {
  const el = synthesizeElement('div', { id: 'bounds-warning', class: 'warning' });
  el.textContent = 'Can\'t place ship here - out of bounds.';
  return el;
};

export default outOfBoundsWarningEl;
