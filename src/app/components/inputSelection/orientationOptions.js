const genHorizontalOptionEl = () => {
  const el = document.createElement('input');
  el.setAttribute('id', 'horizontalOption');
  el.setAttribute('type', 'radio');
  el.setAttribute('name', 'orientation');
  el.setAttribute('value', 'horizontal');
  el.checked = true;
  return el;
};

const genVerticalOptionEl = () => {
  const el = document.createElement('input');
  el.setAttribute('id', 'verticalOption');
  el.setAttribute('type', 'radio');
  el.setAttribute('name', 'orientation');
  el.setAttribute('value', 'vertical');
  return el;
};

const genHorizontalOptionLabelEl = () => {
  const el = document.createElement('label');
  el.setAttribute('for', 'horizontalOption');
  el.textContent = 'Horizontal';
  return el;
};

const genVerticalOptionLabelEl = () => {
  const el = document.createElement('label');
  el.setAttribute('for', 'verticalOption');
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
