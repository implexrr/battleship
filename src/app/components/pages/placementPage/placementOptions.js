import { placementOptionsContainerEl } from '../../../containers';

// TDL: Refactor these imports
import genPlacementModeOptionsEl from '../../inputSelection/orientationOptions';
import genShipTypeOptionsEl from '../../inputSelection/shipTypeOptions';
// TDL: Refactor these imports

const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(genPlacementModeOptionsEl(), genShipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
