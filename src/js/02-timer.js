import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from "notiflix";

const refs = {
  calendar: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]')
};
refs.startBtn.disabled = true;

const reverseTimer = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    if (selectedDates[0].getTime() <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
    refs.startBtn.addEventListener('click', onStart);
  }
};

flatpickr(refs.calendar, reverseTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function reverseTimerBody({ days, hours, minutes, seconds }) {
  refs.days.textContent = String(days).padStart(2, '0');
  refs.hours.textContent = String(hours).padStart(2, '0');
  refs.minutes.textContent = String(minutes).padStart(2, '0');
  refs.seconds.textContent = String(seconds).padStart(2, '0');
}
const onStart = () => {
  refs.calendar.disabled = true;
  const targetDate = new Date(refs.calendar.value).getTime();
  refs.startBtn.disabled = true;

  const intervalId = setInterval(() => {
    const ms = targetDate - Date.now();
    if (ms <= 0) {
      clearInterval(intervalId);
      Notiflix.Notify.success('Set time is over!');
      refs.calendar.disabled = false;
      return;
    }
    const time = convertMs(ms);
    reverseTimerBody(time);
  }, 1000);
};



// ===============Some custom style for reversTimer`s screen====================

const timerContainer = document.querySelector('.timer');
timerContainer.style.cssText = `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;

const fieldContainers = document.querySelectorAll('.field');
fieldContainers.forEach(container => {
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;
  `;
});

const labelElements = document.querySelectorAll('.label');
labelElements.forEach(label => {
    label.style.cssText = `
    text-transform: uppercase;
    font-size: 7px;
    `;
});

