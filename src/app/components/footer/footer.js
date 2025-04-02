import synthesizeElement from '../../utils/synthesizeElement';

const footerEl = () => {
  const el = synthesizeElement('div', { id: 'footer' });
  el.textContent = 'TDL: insert footer later';
  return el;
};

export default footerEl;
