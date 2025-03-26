import synthesizeElement from '../../utils/synthesizeElement';

const horizontalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'horizontalOption',
    type: 'radio',
    name: 'orientation',
    value: 'horizontal',
  });
  el.checked = true;
  return el;
};

const verticalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'verticalOption',
    type: 'radio',
    name: 'orientation',
    value: 'vertical',
  });
  return el;
};

const horizontalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'horizontalOption' });
  el.textContent = 'Horizontal';
  return el;
};

const verticalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'verticalOption' });
  el.textContent = 'Vertical';
  return el;
};

const orientationOptionsEl = () => {
  const el = document.createElement('div');
  el.append(
    horizontalOptionEl(),
    horizontalOptionLabelEl(),
    verticalOptionEl(),
    verticalOptionLabelEl(),
  );
  return el;
};

export default orientationOptionsEl;
