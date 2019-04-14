console.log('hello');

// toggle-menu on mobile

var toggleSidebar = function () {
  var menuMobile = document.querySelector('#toggle-menu');
  var sidebarMenu = document.querySelector('#sidebar-mobile');

  menuMobile.classList.toggle('active');
  sidebarMenu.classList.toggle('hidden');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);
