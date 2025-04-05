import { buttonContainerEl } from '../../../containers';
import { initialButtonEl } from '../../buttons';

// Button to go to the initial page
const startOverButtonEl = () => {
  const el = buttonContainerEl();
  el.append(initialButtonEl());
  return el;
};

export default startOverButtonEl;
