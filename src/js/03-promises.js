// Notiflix Module import
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Getting reference
const formRef = document.querySelector('.form');

// Adding EventListeners
formRef.addEventListener('submit', onBtnSubmitClick);

// Event handler
function onBtnSubmitClick(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget;

  let currentDelay = Number(delay.value);
  const stepNumber = Number(step.value);
  const promisesQuantity = Number(amount.value);

  for (let i = 1; i <= promisesQuantity; i++) {
    createPromise(i, currentDelay).then(onResolved).catch(onRejected);
    currentDelay += stepNumber;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }

      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

function onResolved(result) {
  Notify.success(result);
}

function onRejected(error) {
  Notify.failure(error);
}
