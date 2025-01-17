const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// when the hamburger button is clicked
navToggle.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');
  
  // if the menu is closed, open it
  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    // if the menu is open, close it
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});