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

document.querySelectorAll('.stars').forEach(productRating => {
  productRating.querySelectorAll('.star').forEach(el => {
    el.addEventListener('click', e => {
      if (!e.target.matches('.star')) return;
      e.preventDefault();

      const starID = parseInt(e.target.getAttribute('data-star'));
      productRating.setAttribute('data-rated', starID);
    });
    el.addEventListener('mouseover', e => {
      if (!e.target.matches('.star')) return;
      const starID = parseInt(e.target.getAttribute('data-star'));
      setActiveStars(productRating, starID || 0);
    });
    el.addEventListener('mouseleave', e => {
      const rate = productRating.getAttribute('data-rated');
      setActiveStars(productRating, rate || 0);
    });
  });
});

function setActiveStars (starsNode, rate) {
  const starsInContainer = starsNode.querySelectorAll('.star');
  const stars = Array.prototype.slice.call(starsInContainer);
  for (var i = 0; stars.length; i++) {
    if (i < rate) {
      stars[i].classList.add('is-active');
    } else {
      stars[i].classList.remove('is-active');
    }
  }
}
