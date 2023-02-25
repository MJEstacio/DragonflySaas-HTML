const techBtn = document.querySelector('.tech-btn');
const sideBar = document.querySelector('.tech-sidebar');
const divider = document.querySelector('.tech-divider');

const toggleSideBar = function () {
  sideBar.classList.toggle('side-show');
  divider.classList.toggle('side-show');

};

techBtn.addEventListener('click', toggleSideBar);