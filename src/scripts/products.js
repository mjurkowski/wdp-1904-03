/* eslint-disable space-before-function-paren */
import Flickity from 'flickity';

var initialized = null;
initialize();

function initialize() {
  registerListeners();
}

function registerListeners() {
  registerDotListeners();
  registerTabListeners();
}

function reinitialize(e) {
  const id = `carousel-${e.target.id}`;
  if (initialized) {
    initialized.destroy();
  }
  initialized = new Flickity(`#${id}`, {
    pageDots: false,
    prevNextButtons: false,
    setGallerySize: false
  });
}

function registerTabListeners() {
  const tabs = document.querySelectorAll('.nav-item');
  const tabsArray = [...tabs];

  tabsArray.forEach(tab => {
    tab.addEventListener('click', e => setTimeout(() => reinitialize(e), 1000));
  });
}

function firstDotClassAdd() {
  const firstDot = document.querySelector('.dot-first');
  firstDot.classList.add('active');
}

function secondDotClassAdd() {
  const secondDot = document.querySelector('.dot-second');
  secondDot.classList.add('active');
}

function thirdDotClassAdd() {
  const thirdDot = document.querySelector('.dot-third');
  thirdDot.classList.add('active');
}

function firstDotClassRemove() {
  const firstDot = document.querySelector('.dot-first');
  firstDot.classList.remove('active');
}

function secondDotClassRemove() {
  const secondDot = document.querySelector('.dot-second');
  secondDot.classList.remove('active');
}

function thirdDotClassRemove() {
  const thirdDot = document.querySelector('.dot-third');
  thirdDot.classList.remove('active');
}

function registerDotListeners() {
  const firstDot = document.querySelector('.dot-first');
  const secondDot = document.querySelector('.dot-second');
  const thirdDot = document.querySelector('.dot-third');
  firstDot.addEventListener('click', e => {
    initialized.select(0);
    firstDotClassAdd();
    secondDotClassRemove();
    thirdDotClassRemove();
  });
  secondDot.addEventListener('click', () => {
    initialized.select(1);
    secondDotClassAdd();
    firstDotClassRemove();
    thirdDotClassRemove();
  });
  thirdDot.addEventListener('click', () => {
    initialized.select(2);
    thirdDotClassAdd();
    firstDotClassRemove();
    secondDotClassRemove();
  });
}
