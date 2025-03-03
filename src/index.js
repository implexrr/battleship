import './main.css';
import { makeShip } from './ships';
// import initializeGameboard from './gameBoard';

// const gameboardP1 = initializeGameboard('player1');
// gameboardP1.placeShip(5, 5, 'horizontal', 'battleship');

// gameboardP1.registerHit(0, 0);
// gameboardP1.registerHit(1, 0);
// gameboardP1.registerHit(5,5);
// gameboardP1.registerHit(5,6);
// gameboardP1.registerHit(5,7);
// gameboardP1.registerHit(5,8);

const ships = {};
const shipLengths = {
  carrier: 5, battleship: 4, cruiser: 3, submarine: 2, destroyer: 1,
};

Object.keys(shipLengths).forEach((shipType) => {
  ships[`${shipType}`] = makeShip(0, 0, 'horizontal', shipType);
});

const firstLoc = Object.keys(ships.carrier.getShipCoord())[0];
const [x, y] = firstLoc.split(',').map(Number);
ships.carrier.hitShip(x, y);
