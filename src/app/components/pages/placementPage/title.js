import { pageTitleContainerEl } from '../../../containers';

// Returns the page title element for the Placement phase
const titleEl = () => {
  const el = document.createElement('h2');
  el.textContent = 'Placement Phase';
  return el;
};

// Wraps the title in a container for consistent layout/styling
const pageTitleEl = () => {
  const el = pageTitleContainerEl();
  el.append(titleEl());
  return el;
};

export default pageTitleEl;
