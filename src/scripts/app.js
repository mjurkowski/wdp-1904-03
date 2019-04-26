import '../scripts/promoted';

console.log('hello');

var slidesData = [
  {
    id: '0',
    name: 'Aenean Ru Bristique 1',
    price: 145.9,
    promo: 120,
    src: 'https://images-na.ssl-images-amazon.com/images/I/51A8IdC0VjL._SX425_.jpg',
    rating: 4
  },
  {
    id: '1',
    name: 'Aenean Ru Bristique 4',
    price: 72,
    promo: 50,
    src: 'https://www.alder.in/wp-content/uploads/2017/09/FDS1.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Aenean Ru Bristique 31',
    price: 45.9,
    promo: 44,
    src: 'https://images-na.ssl-images-amazon.com/images/I/51A8IdC0VjL._SX425_.jpg',
    rating: 2
  },
  {
    id: '3',
    name: 'Aenean Ru Bristique',
    price: 270,
    promo: 232.0,
    src: 'https://havertys.scene7.com/is/image/Havertys/5-4598-0009',
    rating: 3
  },
  {
    id: '4',
    name: 'Aenean Ru Bristique',
    price: 45.9,
    promo: 36,
    src: 'https://cb2.scene7.com/is/image/CB2/AndesBedQueenAcaciaLLSHS16_16x9/',
    rating: 0
  }
];

// toggle-menu on mobile

var toggleSidebar = function () {
  var menuMobile = document.querySelector('#toggle-menu');
  menuMobile.classList.toggle('active');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);

// Flickty Product.gallery

(function () {
  var slides = document.getElementById('template-slide-list').innerHTML;
  var slides2 = document.getElementById('template-slide-list-expanded').innerHTML;

  Mustache.parse(slides);
  Mustache.parse(slides2);
  var listSlides = '';
  var listSlides2 = '';

  for (var i = 0; i < slidesData.length; i++) {
    // console.log(slidesData);
    listSlides += Mustache.render(slides, slidesData[i]);
  }

  for (var i = 0; i < slidesData.length; i++) {
    // console.log(slidesData);
    listSlides2 += Mustache.render(slides2, slidesData[i]);
  }

  var results = document.getElementById('slidesContainer2');
  results.innerHTML = listSlides2;

  var results2 = document.getElementById('slidesContainer');
  results2.innerHTML = listSlides;
  // console.log(results);

  var elem = document.querySelector('.main-carousel');
  var elem2 = document.querySelector('.main-carousel2');

  var flkty = new Flickity(elem, {
    initialIndex: 0,
    prevNextButtons: false,
    contain: true,
    freeScroll: true,
    hash: true,
    imagesLoaded: true,
    pageDots: false,
    asNavFor: elem2
  });

  var flkty2 = new Flickity(elem2, {
    prevNextButtons: false,
    pageDots: false
  });

  var nextButton = document.querySelector('.button--next');
  nextButton.addEventListener('click', function () {
    flkty2.next(true);
  });

  var previousButton = document.querySelector('.button--previous');
  previousButton.addEventListener('click', function () {
    flkty2.previous(true);
  });
})();
