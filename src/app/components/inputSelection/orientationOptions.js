import synthesizeElement from '../../utils/synthesizeElement';

const genHorizontalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'horizontalOption',
    type: 'radio',
    name: 'orientation',
    value: 'horizontal',
  });
  el.checked = true;
  return el;
};

const genVerticalOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'verticalOption',
    type: 'radio',
    name: 'orientation',
    value: 'vertical',
  });
  return el;
};

const genHorizontalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'horizontalOption' });
  el.textContent = 'Horizontal';
  return el;
};

const genVerticalOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'verticalOption' });
  el.textContent = 'Vertical';
  return el;
};

const genPlacementModeOptionsEl = () => {
  const el = document.createElement('div');
  el.append(
    genHorizontalOptionEl(),
    genHorizontalOptionLabelEl(),
    genVerticalOptionEl(),
    genVerticalOptionLabelEl(),
  );
  return el;
};

export default genPlacementModeOptionsEl;
