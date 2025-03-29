import { setOrientationState } from '../optionsController';

// Switches placement orientation option
export default function switchOrientation(oldOrientation) {
  if (oldOrientation === 'horizontal') {
    setOrientationState('vertical');
    document.querySelector('#vertical-option').checked = true;
  } else {
    setOrientationState('horizontal');
    document.querySelector('#horizontal-option').checked = true;
  }
}
