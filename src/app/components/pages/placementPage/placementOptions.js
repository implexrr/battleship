import { placementOptionsContainerEl } from '../../../containers';
import { rotationInstructionsEl, orientationOptionsEl, shipTypeOptionsEl } from '../../inputSelection';

// Returns the full placement options section (orientation + ship type selectors)
const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(rotationInstructionsEl(), orientationOptionsEl(), shipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
