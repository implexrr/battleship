import { addKeyboardListeners, removeKeyboardListeners } from '../events/placementPage/keyboard/keyboardEvents';
import mousePosition from './mouse/mousePosition';
import footerEl from '../components/footer/footer';
import { headingText, pageTitleEl } from '../components/title';
import fleetCoordManager from './fleetCoordManager';
import gameManager from './gameManager';
import aiShooter from './aiShooter';

// Globally accessed IIFE that renders, registers and sets the page of the game
const pageManager = (() => {
  const pages = {}; // key=page, val=pageContentGenerator
  let curPage = null;

  // Renders content related to page, according to whatever the current page is
  function renderpageContent(newPage) {
    const contentArr = (pages[curPage])();
    const bodyEl = document.body;
    bodyEl.id = `${newPage}-page`;
    bodyEl.textContent = '';

    bodyEl.append(pageTitleEl(headingText(newPage), newPage));
    for (let i = 0; i < contentArr.length; i += 1) {
      bodyEl.append(contentArr[i]);
    }
    bodyEl.append(footerEl());
  }

  // Registers a page and its associated content generation fxn as key-val pairs
  function registerPage(page, pageContent) {
    pages[page] = pageContent;
  }

  // Sets the current page to newPage, renders associated content via the pages object
  function setPage(newPage) {
    curPage = newPage;
    renderpageContent(newPage);
    if (newPage === 'placement') {
      mousePosition.addMouseListener();
      addKeyboardListeners();
    } else {
      mousePosition.removeMouseListener();
      removeKeyboardListeners();
    }
    if (newPage === 'initial') {
      fleetCoordManager.resetPlayerFleets();
      gameManager.resetGame();
      aiShooter.resetCoordinates();
    }
  }

  return { registerPage, setPage };
})();

export default pageManager;
