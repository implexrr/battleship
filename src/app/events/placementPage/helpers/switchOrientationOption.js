import { placementOptionsManager } from '../../../controllers';

// Switches placement orientation option
export default function switchOrientationOption(oldOrientation) {
  if (oldOrientation === 'horizontal') {
    placementOptionsManager.setOrientationState('vertical');
    document.querySelector('#vertical-option').checked = true;
  } else {
    placementOptionsManager.setOrientationState('horizontal');
    document.querySelector('#horizontal-option').checked = true;
  }
}
