import Flickity from 'flickity';

const firstDot = document.querySelector('.dotF');
const secondDot = document.querySelector('.dotS');
const thirdDot = document.querySelector('.dotT');
var productCarousel = new Flickity('.carousel-1', {
  pageDots: false,
  prevNextButtons: false,
  setGallerySize: false
});
window.addEventListener('resize', () => {
  productCarousel.options.draggable = window.innerWidth < 992;
  productCarousel.updateDraggable();
});
firstDot.addEventListener('click', e => {
  productCarousel.select(0);
  productCarousel2.select(0);
  firstDot.classList.add('active');
  secondDot.classList.remove('active');
  thirdDot.classList.remove('active');
});
secondDot.addEventListener('click', () => {
  productCarousel.select(1);
  productCarousel2.select(1);
  secondDot.classList.add('active');
  firstDot.classList.remove('active');
  thirdDot.classList.remove('active');
});
thirdDot.addEventListener('click', () => {
  productCarousel.select(2);
  productCarousel2.select(2);
  thirdDot.classList.add('active');
  firstDot.classList.remove('active');
  secondDot.classList.remove('active');
});

var productCarousel2 = new Flickity('.carousel-2', {
  pageDots: false,
  prevNextButtons: false,
  setGallerySize: false
});
