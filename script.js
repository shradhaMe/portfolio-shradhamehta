// When the user scrolls the page, execute scrollFunction
window.onscroll = function () { scrollFunction() };


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function scrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}


// Hamburger menu function
const hamburgerMenu = document.querySelector('.hamburger');

hamburgerMenu.addEventListener('click', (e) => {
  let menu = document.querySelector('.nav-text');
  if (menu.style.display === 'none') {
    menu.style.display = 'inline-block';
  } else {
    menu.style.display = 'none';
  }
});


// Back to top function
const logo = document.querySelector('.logo');

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

logo.addEventListener('click', backToTop);
