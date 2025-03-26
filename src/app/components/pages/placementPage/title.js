import { pageTitleContainerEl } from '../../../containers';

const titleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

const pageTitleEl = () => {
  const el = pageTitleContainerEl();
  el.append(titleEl());
  return el;
};

export default pageTitleEl;
