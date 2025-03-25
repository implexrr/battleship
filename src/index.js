import './app/assets/styling/main.css';
import './app/components/pages/initial';
import './app/components/pages/placement';
import './app/components/pages/shooting';
import './app/components/pages/gameOver';

import gameStateManager from './app/controllers/gameStateManager';

// Start by rendering the first page
gameStateManager.setState('placement');
