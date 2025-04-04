import './app/assets/styling/main.css';
import { initialPageEls, placementPageEls, shootingPageEls, gameOverPageEls } from './app/components/pages';
import pageManager from './app/controllers/pageManager';

// Start by rendering the first page
pageManager.setPage('initial');
