export default function showWarning(warningType) {
  const warningEl = document.querySelector(`#${warningType}-warning`);
  warningEl.classList.add('visible');
  setTimeout(() => {
    warningType.classList.remove('visible');
  }, 3000); // auto-hide after 3 seconds
}
