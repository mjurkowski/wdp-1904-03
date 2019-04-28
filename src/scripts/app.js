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
  let queryXL = window.matchMedia('(min-width: 1200px)');

  let queryL = window.matchMedia('(min-width: 993px) and (max-width: 1199px)');

  let queryM = window.matchMedia('(min-width:767px) and (max-width: 992px)');

  let queryS = window.matchMedia('(max-width: 766px)');

  if (queryS.matches) {
    var flkty = new Flickity('.main-carousel', {
      groupCells: 1
    });
  }

  if (queryM.matches) {
    var flkty = new Flickity('.main-carousel', {
      groupCells: 2
    });
  }

  if (queryL.matches) {
    var flkty = new Flickity('.main-carousel', {
      groupCells: 3
    });
  }

  if (queryXL.matches) {
    var flkty = new Flickity('.main-carousel', {
      groupCells: 4
    });
  }
}
