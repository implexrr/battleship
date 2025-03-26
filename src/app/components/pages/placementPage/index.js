import gameStateManager from '../../../controllers/gameStateManager';
import { initialButtonEl, shootingButtonEl } from '../../buttons';
import pageTitleEl from './title';
import boardsEl from './boards';
import placementOptionsEl from './placementOptions';

const placementPageEls = () => {
  const els = [
    pageTitleEl(),
    boardsEl(),
    placementOptionsEl(),
    initialButtonEl(),
    shootingButtonEl(),
  ];
  return els;
};

gameStateManager.registerState('placement', placementPageEls);
export default placementPageEls;
