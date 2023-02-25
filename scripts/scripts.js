/* NavBar Scripts */
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
