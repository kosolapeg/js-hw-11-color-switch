import './sass/styles.scss';

let switcherId = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('[data-action="start"]'),
  buttonStop: document.querySelector('[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startColorSwitching = e => {
  switcherId = setInterval(() => {
    refs.buttonStart.disabled = true;
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    refs.body.style.backgroundColor = randomColor;
  }, 1000);
};

const stopColorSwitching = e => {
  console.log(switcherId);
  clearInterval(switcherId);
  refs.buttonStart.disabled = false;
};

refs.buttonStart.addEventListener('click', startColorSwitching);
refs.buttonStop.addEventListener('click', stopColorSwitching);
