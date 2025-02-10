const shipTypes = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

function createSectionsHitArr(x, y, orientation, length) {
  const sectionsHitArr = {};
  for (let i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      sectionsHitArr[`${x + i}, ${y}`] = false;
    } else if (orientation === 'vertical') {
      sectionsHitArr[`${x}, ${y + i}`] = false;
    } else {
      throw new Error('Not a valid orientation');
    }
  }
  return sectionsHitArr;
}

export default function ship(x, y, orientation, type, player) {
  const length = shipTypes[type];
  const sectionsHit = createSectionsHitArr(x, y, orientation, length);
  let hits = 0;

  function getShipLength() {
    return length;
  }

  function isSectionHit(a, b) {
    return sectionsHit[`${a}, ${b}`];
  }

  function isShipSunk() {
    return length === hits;
  }

  function hitShip(a, b) {
    if (sectionsHit[`${a}, ${b}`] === false) {
      sectionsHit[`${a}, ${b}`] = true;
      hits += 1;
      console.log('hit!');
    }
  }

  function getHits() {
    return hits;
  }

  function getPlayer() {
    return player;
  }

  return {
    getShipLength, isSectionHit, isShipSunk, hitShip, getHits, getPlayer,
  };
}
