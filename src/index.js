import './main.css';
import ship from './ships';
import initializeGameboard from './gameBoard';

const gameboardP1 = initializeGameboard('player1');
gameboardP1.placeShip(5, 5, 'horizontal', 'battleship');

gameboardP1.registerHit(0, 0);
gameboardP1.registerHit(1, 0);
gameboardP1.registerHit(5,5);
gameboardP1.registerHit(5,6);
gameboardP1.registerHit(5,7);
gameboardP1.registerHit(5,8);

