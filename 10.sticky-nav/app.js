window.addEventListener('DOMContentLoaded', initializeApp);

const navbar = document.querySelector('#main');
const topOfNavigation = navbar.offsetTop;

function initializeApp () {
  doEventBindings();
}
function makeNavbarSticky () {
  if (window.scrollY >= topOfNavigation) {
    document.body.style.paddingTop = `${navbar.offsetHeight}px`;
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
    document.body.style.paddingTop = 0;
  }
}

function doEventBindings () {
  window.addEventListener('scroll', makeNavbarSticky);
}
