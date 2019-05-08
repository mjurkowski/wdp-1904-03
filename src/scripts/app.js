import '../scripts/promoted';

console.log('hello');

// toggle-menu on mobile

var toggleSidebar = function() {
  var menuMobile = document.querySelector('#toggle-menu');
  menuMobile.classList.toggle('active');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);

// Enable carousel
document.addEventListener('DOMContentLoaded', initCarousel);

function initCarousel() {
  let groupCells = 1;

  if (window.matchMedia('(min-width:767px) and (max-width: 992px)').matches) {
    groupCells = 2;
  } else if (window.matchMedia('(min-width: 993px) and (max-width: 1199px)').matches) {
    groupCells = 3;
  } else if (window.matchMedia('(min-width: 1200px)').matches) {
    groupCells = 4;
  }

  var flkty = new Flickity('.main-carousel', {
    groupCells: groupCells
  });
}
