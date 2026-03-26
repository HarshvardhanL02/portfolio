// script.js — handles navbar toggle, smooth scroll, form validation
// nothing fancy here, just the basics

// --- Mobile nav toggle ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close nav when a link is clicked on mobile
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// --- Contact form validation ---
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // don't actually submit — no backend

  let valid = true;

  // check name
  const name = document.getElementById('name').value.trim();
  const nameError = document.getElementById('nameError');
  if (name === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // check email — simple format check
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // check message
  const message = document.getElementById('message').value.trim();
  const messageError = document.getElementById('messageError');
  if (message.length < 10) {
    messageError.textContent = 'Message is too short.';
    valid = false;
  } else {
    messageError.textContent = '';
  }

  // if everything is fine, show success message
  if (valid) {
    form.reset();
    formSuccess.classList.add('show');
    // hide success after 4 seconds
    setTimeout(() => formSuccess.classList.remove('show'), 4000);
  }
});
