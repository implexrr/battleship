import './app/assets/styling/main.css';
import { initialPageEls, placementPageEls, shootingPageEls, gameOverPageEls } from './app/components/pages';
import gameStateManager from './app/controllers/gameStateManager';

// Start by rendering the first page
gameStateManager.setState('gameOver');
