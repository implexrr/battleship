const shipLengths = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

// Create array of ship sections for a given ship/orientation
function createSectionsHitArr(x, y, orientation, length) {
  const sectionsHitArr = {};
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      sectionsHitArr[`${x}, ${y + i}`] = false;
    } else if (orientation === 'vertical') {
      sectionsHitArr[`${x + i}, ${y}`] = false;
    } else {
      throw new Error('Not a valid orientation');
    }
  }
  return sectionsHitArr;
}

// Create a ship object
function makeShip(x, y, orientation, type) {
  const length = shipLengths[type];
  const sectionsHit = createSectionsHitArr(x, y, orientation, length);
  let hits = 0;

  function getShipLength() {
    return length;
  }

  function isSectionHit(a, b) {
    return sectionsHit[`${a}, ${b}`];
  }

  function isSunk() {
    return length === hits;
  }

  function getHits() {
    return hits;
  }

  function getShipHealth() {
    return length - hits;
  }

  function getShipCoord() {
    return sectionsHit;
  }

  // Change a setion in the ship from <shipname> to 'sunk', then increase # of hits on ship
  function hitShip(a, b) {
    if (sectionsHit[`${a}, ${b}`] === false) {
      sectionsHit[`${a}, ${b}`] = true;
      hits += 1;
    }
  }

  return {
    getShipLength, isSectionHit, isSunk, hitShip, getHits, getShipCoord, getShipHealth,
  };
}

export { makeShip, shipLengths };

// TDL Check that all ships, given random (but tracked) starting coordinates, return correct
// sectionHits, getHits, isSunk, etc. values when hit with all possible combinations
