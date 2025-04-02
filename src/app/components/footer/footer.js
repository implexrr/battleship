import synthesizeElement from '../../utils/synthesizeElement';

const copyright = () => {
  const el = synthesizeElement('div', { id: 'description' });
  el.textContent = 'Copyright © 2025 implexrr';
  return el;
};

const symbol = () => {
  const el = synthesizeElement('div', { id: 'github-link' });
  return el;
};

const link = () => {
  const el = synthesizeElement('a', { href: 'https://github.com/implexrr/battleship' });
  el.append(symbol());
  return el;
};

const footerEl = () => {
  const el = synthesizeElement('div', { id: 'footer' });
  el.append(copyright(), link());
  return el;
};

export default footerEl;
