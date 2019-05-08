import Flickity from 'flickity';

const firstDot = document.querySelector('.dotF');
const secondDot = document.querySelector('.dotS');
const thirdDot = document.querySelector('.dotT');
const feedbackCarousel = new Flickity('.feedback-carousel', {
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  draggable: false
});
firstDot.addEventListener('click', () => feedbackCarousel.select(0));
secondDot.addEventListener('click', () => feedbackCarousel.select(1));
thirdDot.addEventListener('click', () => feedbackCarousel.select(2));
