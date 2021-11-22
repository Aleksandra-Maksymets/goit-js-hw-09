// Getting references
const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;
stopBtnRef.disabled = true;

// Adding Eventlisteners
startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBntClick);

// Event Handlers
function onStartBtnClick() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBntClick() {
  clearInterval(timerId);
  stopBtnRef.disabled = true;
  startBtnRef.disabled = false;
}

// Function for getting random color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
