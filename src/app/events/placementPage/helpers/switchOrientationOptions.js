import placementOptionsManager from '../../../controllers/placementOptionsManager';

// Switches placement orientation option
export default function switchOrientation(oldOrientation) {
  if (oldOrientation === 'horizontal') {
    placementOptionsManager.setOrientationState('vertical');
    document.querySelector('#vertical-option').checked = true;
  } else {
    placementOptionsManager.setOrientationState('horizontal');
    document.querySelector('#horizontal-option').checked = true;
  }
}
