const hamburgerButton = document.querySelector('#hamburger');
const mainNavigation = document.querySelector('#mainNav');

function toggleNavigation() {
  mainNavigation.classList.toggle('active');
}

hamburgerButton.addEventListener('click', toggleNavigation);