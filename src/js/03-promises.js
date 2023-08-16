// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

import Notiflix from "notiflix";

const MainForm = document.querySelector('.form');
MainForm.addEventListener('submit', onHandleButtonSubmit);

function onHandleButtonSubmit(evt) {
  evt.preventDefault();

  const { delay, step, amount } = evt.currentTarget.elements;
  
  const initialDelay = Number(delay.value);
  const totalAmount = Number(amount.value);
  const stepValue = Number(step.value);

  for (let i = 0; i < totalAmount; i += 1) {
    const currentDelay = initialDelay + (i - 1) * stepValue;
    createPromise(i, currentDelay);
  };
}

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    const promiseMessage = shouldResolve
      ? `✅ Fulfilled promise ${position} in ${delay}ms`
      : `❌ Rejected promise ${position} in ${delay}ms`;
    
    const promise = new Promise((resolve, reject) => {
      shouldResolve
        ? resolve(promiseMessage)
        : reject(promiseMessage);
    });
    promise.then(value => Notiflix.Notify.success(value))
      .catch(error => Notiflix.Notify.failure(error));
  }, delay);

}