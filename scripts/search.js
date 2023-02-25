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

const searchBtn = document.querySelector('.search-btn');
const closeBtn = document.querySelector('.close-btn');
const searchBar = document.querySelector('.search-bar');
let searchOpen = false;

searchBtn.addEventListener('click', () => {
  if (!searchOpen) {
    searchBtn.classList.add('hidden');
    searchOpen = true;
    closeBtn.classList.remove('hidden');
    searchBar.classList.add('search-bar-active');

  }
});

closeBtn.addEventListener('click', () => {
  if (searchOpen) {
    searchBtn.classList.remove('hidden');
    searchOpen = false;
    closeBtn.classList.add('hidden');
    searchBar.classList.remove('search-bar-active');
  }
});