import Flickity from 'flickity';

const pointsBox = document.querySelector('.points-box');
const firstPoint = document.getElementById('first-point');
const secondPoint = document.getElementById('second-point');
const thirdPoint = document.getElementById('third-point');
const carouselCells = document.querySelectorAll('.images');

const flkty = new Flickity('.hot-deals-carousel', {
  pageDots: false,
  wrapAround: true,
  autoPlay: 3000,
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
  flkty.selectCell(0);
  flkty.pausePlayer();
  activeFirstPoint();
});

secondPoint.addEventListener('click', () => {
  flkty.selectCell(1);
  flkty.pausePlayer();
  activeSecondPoint();
});

thirdPoint.addEventListener('click', () => {
  flkty.selectCell(2);
  flkty.pausePlayer();
  activeThirdPoint();
});

pointsBox.addEventListener('mouseleave', () => flkty.unpausePlayer());

flkty.on('change', () => {
  if (flkty.selectedIndex === 0) {
    activeFirstPoint();
  } else if (flkty.selectedIndex === 1) {
    activeSecondPoint();
  } else {
    activeThirdPoint();
  }
});

carouselCells.forEach(cell =>
  cell.addEventListener('mouseleave', () => {
    flkty.playPlayer();
  })
);
