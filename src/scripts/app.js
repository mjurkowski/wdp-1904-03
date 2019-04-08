console.log('hello');

const cartCounter = value => {
  const element = document.getElementById('cart-counter');
  value >= 0 && value <= 99999 ? (element.innerText = value) : (element.innerText = 0);
};

cartCounter(123);
