console.log('hello');

// toggle-menu on mobile

var toggleSidebar = function () {
  var menuMobile = document.querySelector('#toggle-menu');
  menuMobile.classList.toggle('active');
};

var hamburgerMobile = document.querySelector('#hamburger-on-mobile');
var hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerMobile.addEventListener('click', toggleSidebar);
hamburgerToggle.addEventListener('click', toggleSidebar);

//  star
// const productRating = document.getElementById('product-rating');
// const productRating = document.querySelectorAll('.stars');
const stars = document.querySelectorAll('.star');
let rating = 0;

document.querySelectorAll('.stars').forEach(productRating => {
  productRating.querySelectorAll('.star').forEach(el => {
    el.addEventListener('click', e => {
      if (!e.target.matches('.star')) return;
      e.preventDefault();

      const starID = parseInt(e.target.getAttribute('data-star'));

      removeClassFromElements('is-active', stars);
      highlightStars(starID);

      rating = starID;
    });
    el.addEventListener('mouseover', e => {
      if (!e.target.matches('.star')) return;

      removeClassFromElements('is-active', stars);
      const starID = parseInt(e.target.getAttribute('data-star'));
      highlightStars(starID);
    });
    el.addEventListener('mouseleave', e => {
      removeClassFromElements('is-active', stars);
      if (rating === 0) return;
      highlightStars(rating);
    });
  });
});

// productRating.addEventListener('click', e => {
//   if (!e.target.matches('.star')) return;
//   e.preventDefault();

//   const starID = parseInt(e.target.getAttribute('data-star'));

//   removeClassFromElements('is-active', stars);
//   highlightStars(starID);

//   rating = starID;
// });

// productRating.addEventListener('mouseover', e => {
//   if (!e.target.matches('.star')) return;

//   removeClassFromElements('is-active', stars);
//   const starID = parseInt(e.target.getAttribute('data-star'));
//   highlightStars(starID);
// });

// productRating.addEventListener('mouseleave', e => {
//   removeClassFromElements('is-active', stars);
//   if (rating === 0) return;
//   highlightStars(rating);
// });

function highlightStars (starID) {
  for (let i = 0; i < starID; i++) {
    stars[i].classList.add('is-active');
  }
}

function removeClassFromElements (className, elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove(className);
  }
}
//
