// Default placement settings
let currentOrientation = 'horizontal';
let currentShipType = 'carrier';

function setShipType(shipType) {
  currentShipType = shipType;
}

function setOrientationState(orientation) {
  currentOrientation = orientation;
}

// Provide the current selected orientation and ship type
function getPlacementState() {
  return {
    orientation: currentOrientation,
    shipType: currentShipType,
  };
}

export { setShipType, setOrientationState, getPlacementState };
