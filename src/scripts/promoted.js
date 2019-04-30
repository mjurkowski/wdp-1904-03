import Flickity from 'flickity';

const carouselCells = document.querySelectorAll('.images');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const leftCarousel = new Flickity('.hot-deals-carousel', {
  pageDots: true,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: false,
  draggable: false
});

const rightCarousel = new Flickity('.products-carousel', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: false
});

const rightCarouselMobile = new Flickity('.products-carousel-mobile', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: true
});

const pointsBox = document.querySelectorAll('.section--promoted .hot-deals li');

pointsBox.forEach(el => {
  el.addEventListener('mouseleave', () => {
    leftCarousel.playPlayer();
  });
});

carouselCells.forEach(cell =>
  cell.addEventListener('mouseleave', () => {
    leftCarousel.playPlayer();
  })
);

leftArrow.addEventListener('click', () => {
  rightCarousel.previous();
  rightCarouselMobile.previous();
});
rightArrow.addEventListener('click', () => {
  rightCarousel.next();
  rightCarouselMobile.next();
});
