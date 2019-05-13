/* eslint-disable space-before-function-paren */
import Flickity from 'flickity';

const tabs = document.querySelectorAll('.nav-item');
const tabsArray = [...tabs];

var initialized = null;

tabsArray.forEach(tab => {
  tab.addEventListener('click', e => {
    const id = `carousel-${e.target.id}`;
    if (initialized) {
      initialized.destroy();
    }
    initialized = new Flickity(`#${id}`, {
      pageDots: false,
      prevNextButtons: false,
      setGallerySize: false
    });
    registerDotListeners();
  });
});

function registerDotListeners() {
  const firstDot = document.querySelector('.dot-first');
  const secondDot = document.querySelector('.dot-second');
  const thirdDot = document.querySelector('.dot-third');
  firstDot.addEventListener('click', e => {
    initialized.select(0);
    firstDot.classList.add('active');
    secondDot.classList.remove('active');
    thirdDot.classList.remove('active');
  });
  secondDot.addEventListener('click', () => {
    initialized.select(1);
    secondDot.classList.add('active');
    firstDot.classList.remove('active');
    thirdDot.classList.remove('active');
  });
  thirdDot.addEventListener('click', () => {
    initialized.select(2);
    thirdDot.classList.add('active');
    firstDot.classList.remove('active');
    secondDot.classList.remove('active');
  });
}
