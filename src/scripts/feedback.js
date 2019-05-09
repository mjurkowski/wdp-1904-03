import Flickity from 'flickity';

const firstDot = document.querySelector('.dotF');
const secondDot = document.querySelector('.dotS');
const thirdDot = document.querySelector('.dotT');
const feedbackCarousel = new Flickity('.feedback-carousel', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: window.innerWidth < 992
});
window.addEventListener('resize', () => {
  feedbackCarousel.options.draggable = window.innerWidth < 992;
  feedbackCarousel.updateDraggable();
});
firstDot.addEventListener('click', e => {
  feedbackCarousel.select(0);
  firstDot.classList.add('active');
  secondDot.classList.remove('active');
  thirdDot.classList.remove('active');
});
secondDot.addEventListener('click', () => {
  feedbackCarousel.select(1);
  secondDot.classList.add('active');
  firstDot.classList.remove('active');
  thirdDot.classList.remove('active');
});
thirdDot.addEventListener('click', () => {
  feedbackCarousel.select(2);
  thirdDot.classList.add('active');
  firstDot.classList.remove('active');
  secondDot.classList.remove('active');
});
