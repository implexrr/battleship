import synthesizeElement from '../../../utils/synthesizeElement';

const cellEl = (i, j, player, type) => {
  const el = synthesizeElement('div', {
    'data-row': i,
    'data-col': j,
    class: `cell ${player}`,
    'cell-type': type,
  });
  return el;
};

export default cellEl;
