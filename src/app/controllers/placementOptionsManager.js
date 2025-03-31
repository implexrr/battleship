// Globally accessed IIFE that gets/sets ship placement options
const placementOptionsManager = (() => {
  // // Default placement settings
  let curOrientation = 'horizontal';
  let curShipType = 'carrier';

  function setShipType(shipType) {
    curShipType = shipType;
  }

  function setOrientationState(orientation) {
    curOrientation = orientation;
  }

  // Provide the current selected orientation and ship type
  function getPlacementState() {
    return {
      orientation: curOrientation,
      shipType: curShipType,
    };
  }

  return { setShipType, setOrientationState, getPlacementState };
})();

export default placementOptionsManager;
