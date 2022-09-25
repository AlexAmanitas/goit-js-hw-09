import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('button[data-start]'),
  // stopButton: document.querySelector('button[data-stop]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let intervalId = null;
const currentTime = Date.now();

refs.startButton.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    const deltaTime = delta(selectedDates[0]);
    if (deltaTime < 0) {
      Notify.failure('Please choose a date in the future');
      return selectedDates;
    }
    refs.startButton.removeAttribute('disabled');
    marckUp(convertMs(deltaTime));
    refs.startButton.addEventListener('click', () => {
      timer(deltaTime);
      refs.startButton.setAttribute('disabled', 'disabled');
    });
  },
};

flatpickr(refs.input, options);

function delta(chooseTime) {
  return chooseTime - currentTime;
}

function timer(time) {
  marckUp(convertMs(time));
  intervalId = setInterval(() => {
    console.log(time);
    time -= 1000;
    marckUp(convertMs(time));
    if (time < 1000) clearInterval(intervalId);
  }, 1000);
}

function marckUp(obj) {
  const { days, hours, minutes, seconds } = obj;
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// let isStopButtonFirstClick = false;

// refs.stopButton.addEventListener('click', () => {
//   if (isStopButtonFirstClick) {
//     marckUp(convertMs(0));
//     flatpickr(refs.input, options);
//     isStopButtonFirstClick = false;
//   } else {
//     clearInterval(intervalId);
//     isStopButtonFirstClick = true;
//   }
// });
