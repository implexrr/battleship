import gameStateManager from '../../../controllers/gameStateManager';
import { playNowButtonEl } from '../../buttons';

const genTitleEl = () => {
  const el = document.createElement('h1');
  el.textContent = 'Battleship';
  return el;
};

const initialPageEls = () => {
  const els = [genTitleEl(), playNowButtonEl()];
  return els;
};

// NTS: The state manager object is being imported, then altered directly in this file, thus
// eliminating the need to import initial.js in the gameStateManager.js file.
// This removes the cyclic dependency I was struggling with earlier.
gameStateManager.registerState('initial', initialPageEls);

export default initialPageEls;
