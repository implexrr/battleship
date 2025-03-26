import { placementOptionsContainerEl } from '../../../containers';
import { orientationOptionsEl, shipTypeOptionsEl } from '../../inputSelection';

// Returns the full placement options section (orientation + ship type selectors)
const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(orientationOptionsEl(), shipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
