import { buttonContainerEl } from '../../../containers';
import { playNowButtonEl } from '../../buttons';

const goToPlacementButtonEl = () => {
  const el = buttonContainerEl();
  el.append(playNowButtonEl());
  return el;
};

export default goToPlacementButtonEl;
