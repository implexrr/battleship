import synthesizeElement from '../../utils/synthesizeElement';

// Creates a radio input element for the "Horizontal" orientation option
const horizontalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'horizontal-option',
    type: 'radio',
    name: 'orientation',
    value: 'horizontal',
  });
  el.checked = true; // Sets "Horizontal" as the default selected option
  return el;
};

// Creates a radio input element for the "Vertical" orientation option
const verticalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'vertical-option',
    type: 'radio',
    name: 'orientation',
    value: 'vertical',
  });
  return el;
};

// Creates a label element for the "Horizontal" radio button
const horizontalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'horizontal-option' });
  el.textContent = 'Horizontal';
  return el;
};

// Creates a label element for the "Vertical" radio button
const verticalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'vertical-option' });
  el.textContent = 'Vertical';
  return el;
};

// Combines all orientation-related elements into a single container <div>
const orientationOptionsEl = () => {
  const el = synthesizeElement('div', { id: 'orientation-options' });
  el.append(
    horizontalOptionEl(),
    horizontalOptionLabelEl(),
    verticalOptionEl(),
    verticalOptionLabelEl(),
  );
  return el;
};

export default orientationOptionsEl;
