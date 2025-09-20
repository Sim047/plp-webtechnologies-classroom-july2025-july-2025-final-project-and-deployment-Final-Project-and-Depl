// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
