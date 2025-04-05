import { placementOptionsContainerEl } from '../../../containers';
import { placementKeyboardInstructionsEl, orientationOptionsEl, shipTypeOptionsEl } from '../../inputSelection';

// Returns the full placement options section (orientation + ship type selectors)
const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(placementKeyboardInstructionsEl(), orientationOptionsEl(), shipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
