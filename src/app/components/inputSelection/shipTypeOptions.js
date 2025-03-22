import synthesizeElement from '../../utils/synthesizeElement';

const genCarrierOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'carrierOption',
    type: 'radio',
    name: 'shipType',
    value: 'carrier',
  });
  el.checked = true;
  return el;
};

const genCarrierOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'carrierOption' });
  el.textContent = 'Carrier';
  return el;
};

const genBattleshipOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'battleshipOption',
    type: 'radio',
    name: 'shipType',
    value: 'battleship',
  });
  return el;
};

const genBattleshipOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'battleshipOption' });
  el.textContent = 'Battleship';
  return el;
};

const genCruiserOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'cruiserOption',
    type: 'radio',
    name: 'shipType',
    value: 'cruiser',
  });
  return el;
};

const genCruiserOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'cruiserOption' });
  el.textContent = 'Cruiser';
  return el;
};

const genSubmarineOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'submarineOption',
    type: 'radio',
    name: 'shipType',
    value: 'submarine',
  });
  return el;
};

const genSubmarineOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'submarineOption' });
  el.textContent = 'Submarine';
  return el;
};

const genDestroyerOptionEl = () => {
  const el = synthesizeElement('input', {
    id: 'destroyerOption',
    type: 'radio',
    name: 'shipType',
    value: 'destroyer',
  });
  return el;
};

const genDestroyerOptionLabelEl = () => {
  const el = synthesizeElement('label', { for: 'destroyerOption' });
  el.textContent = 'Destroyer';
  return el;
};

const genShipTypeOptionsEl = () => {
  const el = document.createElement('div');
  el.append(
    genCarrierOptionEl(),
    genCarrierOptionLabelEl(),
    genBattleshipOptionEl(),
    genBattleshipOptionLabelEl(),
    genCruiserOptionEl(),
    genCruiserOptionLabelEl(),
    genSubmarineOptionEl(),
    genSubmarineOptionLabelEl(),
    genDestroyerOptionEl(),
    genDestroyerOptionLabelEl(),
  );
  return el;
};

export default genShipTypeOptionsEl;
