// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close the menu after tapping a link + mark it active
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.classList.remove('open');
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Highlight the nav link of the section currently in view
const sections = ['home', 'menu', 'about', 'reservation']
  .map(id => document.getElementById(id));

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  let current = 'home';
  sections.forEach(sec => { if (sec.offsetTop <= y) current = sec.id; });
  navLinks.forEach(l =>
    l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

// Reservation form
const form = document.getElementById('reservationForm');
const status = document.getElementById('reservationStatus');
const dateInput = document.getElementById('resDate');

// Can't book dates in the past
dateInput.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Restaurant is closed on Sundays
  const day = new Date(dateInput.value + 'T00:00:00').getDay();
  status.style.display = 'block';

  if (day === 0) {
    status.className = 'reservation-status error';
    status.textContent = 'Sorry, we are closed on Sundays. Please choose another date.';
    return;
  }

  const name = document.getElementById('resName').value.trim();
  status.className = 'reservation-status success';
  status.textContent = `Thank you, ${name}! Your table is reserved. A confirmation will be sent to your email.`;
  form.reset();
});
