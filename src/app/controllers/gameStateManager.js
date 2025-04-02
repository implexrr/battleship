import { addKeyboardListeners, removeKeyboardListeners } from '../events/placementPage/keyboard/keyboardEvents';
import mousePosition from './mouse/mousePosition';

// Globally accessed IIFE that renders, registers and sets the state of the game
const gameStateManager = (() => {
  const states = {}; // key=state, val=stateContentGenerator
  let curState = null;

  // Renders content related to state, according to whatever the current state is
  function renderStateContent(newState) {
    const contentArr = (states[curState])();
    const bodyEl = document.body;
    bodyEl.id = `${newState}-page`;
    bodyEl.textContent = '';

    for (let i = 0; i < contentArr.length; i += 1) {
      bodyEl.append(contentArr[i]);
    }
  }

  // Registers a state and its associated content generation fxn as key-val pairs
  function registerState(state, stateContent) {
    states[state] = stateContent;
  }

  // Sets the current state to newState, renders associated content via the states object
  function setState(newState) {
    curState = newState;
    renderStateContent(newState);
    if (newState === 'placement') {
      mousePosition.addMouseListener();
      addKeyboardListeners();
    } else {
      mousePosition.removeMouseListener();
      removeKeyboardListeners();
    }
  }

  return { registerState, setState };
})();

export default gameStateManager;
