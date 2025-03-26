import { placementOptionsContainerEl } from '../../../containers';
import { orientationOptionsEl, shipTypeOptionsEl } from '../../inputSelection';

const placementOptionsEl = () => {
  const el = placementOptionsContainerEl();
  el.append(orientationOptionsEl(), shipTypeOptionsEl());
  return el;
};

export default placementOptionsEl;
