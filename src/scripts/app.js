import '../scripts/promoted';
import '../scripts/gallery';

console.log('hello');

var toggleSidebar = function() {
  var menuMobile = document.querySelector('#toggle-menu');
  menuMobile.classList.toggle('active');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);
