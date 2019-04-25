import Flickity from 'flickity';

const pointsBox = document.querySelector('.points-box');
const firstPoint = document.getElementById('first-point');
const secondPoint = document.getElementById('second-point');
const thirdPoint = document.getElementById('third-point');
const carouselCells = document.querySelectorAll('.images');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const leftCarousel = new Flickity('.hot-deals-carousel', {
  pageDots: false,
  wrapAround: true,
  autoPlay: 3000,
  prevNextButtons: false,
  draggable: false
});

const rightCarousel = new Flickity('.products-carousel', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: false
});

const activeFirstPoint = () => {
  firstPoint.classList.add('active');
  secondPoint.classList.remove('active');
  thirdPoint.classList.remove('active');
};

const activeSecondPoint = () => {
  secondPoint.classList.add('active');
  firstPoint.classList.remove('active');
  thirdPoint.classList.remove('active');
};

const activeThirdPoint = () => {
  thirdPoint.classList.add('active');
  firstPoint.classList.remove('active');
  secondPoint.classList.remove('active');
};

firstPoint.addEventListener('click', () => {
  leftCarousel.selectCell(0);
  leftCarousel.pausePlayer();
  activeFirstPoint();
});

secondPoint.addEventListener('click', () => {
  leftCarousel.selectCell(1);
  leftCarousel.pausePlayer();
  activeSecondPoint();
});

thirdPoint.addEventListener('click', () => {
  leftCarousel.selectCell(2);
  leftCarousel.pausePlayer();
  activeThirdPoint();
});

pointsBox.addEventListener('mouseleave', () => leftCarousel.unpausePlayer());

leftCarousel.on('change', () => {
  if (leftCarousel.selectedIndex === 0) {
    activeFirstPoint();
  } else if (leftCarousel.selectedIndex === 1) {
    activeSecondPoint();
  } else {
    activeThirdPoint();
  }
});

carouselCells.forEach(cell =>
  cell.addEventListener('mouseleave', () => {
    leftCarousel.playPlayer();
  })
);

leftArrow.addEventListener('click', () => rightCarousel.previous());
rightArrow.addEventListener('click', () => rightCarousel.next());
