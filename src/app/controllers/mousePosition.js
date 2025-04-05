const mousePosition = (() => {
  // Initializes mouseX and mouseY positions
  let mouseX = 0;
  let mouseY = 0;

  // Changes mouseX and mouseY positions
  function recordMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function getMousePosition() {
    return { mouseX, mouseY };
  }

  // Adds and removes mouse listeners from document
  function addMouseListener() {
    document.addEventListener('mousemove', recordMousePosition);
  }
  function removeMouseListener() {
    document.removeEventListener('mousemove', recordMousePosition);
  }

  return {
    recordMousePosition,
    getMousePosition,
    addMouseListener,
    removeMouseListener,
  };
})();

export default mousePosition;
