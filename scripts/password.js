const showPassword = document.querySelector('#show-password');
const password = document.querySelector('#password');

showPassword.addEventListener('click', function () {
  showPassword.classList.toggle('fa-eye-slash');
  showPassword.classList.toggle('fa-eye');
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
});

const modal = document.querySelector('.error-modal');
const overlay = document.querySelector('.overlay');
const forgotPassBtn = document.querySelector('.forgot-pass');
const closeBtn = document.querySelector('.close-btn');

const openModal = function () {
  modal.classList.remove('modal-hidden');
  overlay.classList.remove('modal-hidden');
};
const closeModal = function () {
  modal.classList.add('modal-hidden');
  overlay.classList.add('modal-hidden');
};

forgotPassBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);