import Flickity from 'flickity';

var initialized = null;
initialize();

function initialize () {
  registerListeners();
  initializeCarousel();
}

function registerListeners () {
  registerDotListeners();
  registerTabListeners();
}

function initializeCarousel () {
  reinitializeCarousel(null, 'carousel-bed-tab');
}

function reinitializeCarousel (e, carouselId) {
  const id = carouselId || `carousel-${e.target.id}`;

  if (initialized) {
    initialized.destroy();
  }
  initialized = new Flickity(`#${id}`, {
    pageDots: false,
    prevNextButtons: false,
    setGallerySize: false
  });
}

function registerTabListeners () {
  const tabs = document.querySelectorAll('.nav-item');
  const tabsArray = [...tabs];

  tabsArray.forEach(tab => {
    tab.addEventListener('click', e => {
      setTimeout(() => reinitializeCarousel(e), 1000);
      resetClassActive();
    });
  });
}

function registerDotListeners () {
  const navAnchor = document.querySelectorAll('.dot-button');
  navAnchor.forEach((anchor, index) => {
    anchor.addEventListener('click', function (e) {
      changeClassActive(e);
      selectSlide(index);
    });
  });
}

function selectSlide (index) {
  initialized.select(index);
}

function changeClassActive (e) {
  document
    .querySelector('.dots-active-products')
    .classList.remove('dots-active-products');
  e.target.classList.add('dots-active-products');
}

function resetClassActive () {
  document
    .querySelector('.dots-active-products')
    .classList.remove('dots-active-products');
  document.querySelectorAll('.dot-button')[0].classList.add('dots-active-products');
}
