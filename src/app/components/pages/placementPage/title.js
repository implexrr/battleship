import { pageTitleContainerEl } from '../../../containers';

const pageTitleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

const pageTitle = pageTitleContainerEl();
pageTitle.append(pageTitleEl);

export default pageTitleEl;
