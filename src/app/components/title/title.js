import { pageTitleContainerEl } from '../../containers';

// Returns the page title element for the Placement phase
const titleEl = (pageHeading) => {
  const el = document.createElement('h1');
  el.textContent = pageHeading;
  return el;
};

// Wraps the title in a container for consistent layout/styling
const pageTitleEl = (pageHeading, pageName) => {
  const el = pageTitleContainerEl(pageName);
  el.append(titleEl(pageHeading));
  return el;
};

export default pageTitleEl;
