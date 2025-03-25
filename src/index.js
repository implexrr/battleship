import './app/assets/styling/main.css';
// import './app/components/pages/initial';
// import './app/components/pages/shooting';
// import './app/components/pages/gameOver';
import { initialPageEls, placementPageEls, shootingPageEls, gameOverPageEls } from './app/components/pages';
import gameStateManager from './app/controllers/gameStateManager';

// Start by rendering the first page
gameStateManager.setState('placement');
