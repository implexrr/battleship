export default function showWarning(warningType) {
  const warningEl = document.querySelector(`#${warningType}-warning`);
  warningEl.classList.add('visible');
  setTimeout(() => {
    warningEl.classList.remove('visible');
  }, 3000); // auto-hide after 3 seconds
  console.log(warningType);
}