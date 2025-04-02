import { buttonContainerEl } from '../../../containers';
import { initialButtonEl } from '../../buttons';

const startOverButtonEl = () => {
  const el = buttonContainerEl();
  el.append(initialButtonEl());
  return el;
};

export default startOverButtonEl;
