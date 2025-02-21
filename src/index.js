import './main.css';
import ship from './ships';
import initializeGameboard from './gameBoard';

const gameboardP1 = initializeGameboard('player1');
console.log(gameboardP1);
gameboardP1.placeShip(0, 0, 'horizontal', 'battleship');
gameboardP1.registerHit(0, 0);
console.log(gameboardP1.getBoard());
