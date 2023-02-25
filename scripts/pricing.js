const navBtn = document.querySelector('.nav-btn');
let navOpen = false;
const navbar = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  if (!navOpen) {
    navBtn.classList.add('open');
    navOpen = true;
    navbar.classList.add('show');

  } else {
    navBtn.classList.remove('open');
    navbar.classList.remove('show');
    navOpen = false;

  }
});
/* Pricing Scripts */
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');

yearly.addEventListener('click', () => {
  yearly.classList.add('price-active');
  monthly.classList.remove('price-active');
});

monthly.addEventListener('click', () => {
  monthly.classList.add('price-active');
  yearly.classList.remove('price-active');
});