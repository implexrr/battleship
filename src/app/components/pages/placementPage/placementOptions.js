import { placementOptionsContainerEl } from '../../../containers';
import genPlacementModeOptionsEl from '../../inputSelection/orientationOptions';
import genShipTypeOptionsEl from '../../inputSelection/shipTypeOptions';

const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(genPlacementModeOptionsEl(), genShipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
