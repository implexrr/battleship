const SHIP_LENGTHS = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

// Create array of ship sections for a given ship/orientation
function createSectionsHitArr(row, col, orientation, length) {
  const sectionsHitArr = {};
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      sectionsHitArr[`${row}, ${col + i}`] = false;
    } else if (orientation === 'vertical') {
      sectionsHitArr[`${row + i}, ${col}`] = false;
    } else {
      throw new Error('Not a valid orientation');
    }
  }
  return sectionsHitArr;
}

// Create a ship object
function makeShip(row, col, orientation, type) {
  const length = SHIP_LENGTHS[type];
  const sectionsHit = createSectionsHitArr(row, col, orientation, length);
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

export { makeShip, SHIP_LENGTHS };
