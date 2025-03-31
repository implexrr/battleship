const mousePosition = (() => {
  // Initializes mouseX and mouseY positions
  let mouseX = 0;
  let mouseY = 0;

  function consoleMousePosition() {
    console.log(`x: ${mouseX}, y: ${mouseY}`);
  }

  // Changes mouseX and mouseY positions
  function recordMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function addMouseListener() {
    document.addEventListener('mousemove', recordMousePosition);
  }

  function removeMouseListener() {
    document.removeEventListener('mousemove', recordMousePosition);
  }

  function getMousePosition() {
    return { mouseX, mouseY };
  }

  return {
    recordMousePosition,
    addMouseListener,
    removeMouseListener,
    getMousePosition,
    consoleMousePosition,
  };
})();

export default mousePosition;
