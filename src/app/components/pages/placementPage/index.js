import pageManager from '../../../controllers/pageManager';
import boardsEl from './boards';
import placementOptionsEl from './placementOptions';
import { duplicatePlacementWarningEl, overlapWarningEl, outOfBoundsWarningEl } from '../../popUps';
import startOverButtonEl from './button';

// Returns an array of DOM elements to render for the "Placement" state
const placementPageEls = () => {
  const els = [
    duplicatePlacementWarningEl(),
    overlapWarningEl(),
    outOfBoundsWarningEl(),
    boardsEl(),
    placementOptionsEl(),
    startOverButtonEl(),
  ];
  return els;
};

/*
  Registers this set of elements with the game state manager

  Note to self:
  We're importing the state manager here and registering the state externally.
  This avoids needing to import this file inside `pageManager.js`,
  which would cause a circular dependency.

  This structure keeps state registration modular and decoupled.
*/
pageManager.registerPage('placement', placementPageEls);
export default placementPageEls;
