const gameStateManager = (() => {
  const states = {}; // key=state, val=stateContentGenerator
  let curState = null;
  function renderStateContent() {
    const stateContent = states[curState];
    const bodyEl = document.querySelector('body');
    bodyEl.textContent = '';
    bodyEl.append(stateContent());
  }

  function registerState(state, stateContent) {
    states[state] = stateContent;
  }

  function setState(newState) {
    curState = newState;
    renderStateContent();
  }

  return { registerState, setState };
})();

export default gameStateManager;
