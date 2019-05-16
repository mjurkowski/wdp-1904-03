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

function registerDotListeners() {
  const navAnchor = document.querySelectorAll('.dot');
  navAnchor.forEach(anchor => {
    anchor.addEventListener('click', changeClassActive);
  });
}

function changeClassActive(e) {
  const current = document.querySelector('.activer');
  current.className = current.className.replace(' activer', '');
  e.target.className += ' activer';
}
