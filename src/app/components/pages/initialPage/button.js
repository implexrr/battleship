import { buttonContainerEl } from '../../../containers';
import { playNowButtonEl } from '../../buttons';

// Button for initiating the placement phase of the game
const goToPlacementButtonEl = () => {
  const el = buttonContainerEl();
  el.append(playNowButtonEl());
  return el;
};

export default goToPlacementButtonEl;
