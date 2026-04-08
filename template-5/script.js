/* ============================================================
   script.js — Portfolio of Harshvardhan Lokhande
   Features:
     1. Navbar scroll shadow
     2. Hamburger mobile menu toggle
     3. Smooth scrolling for nav links
     4. Fade-in animation on scroll (Intersection Observer)
     5. Contact form validation
   ============================================================ */


/* ---- FEATURE 1: NAVBAR SHADOW ON SCROLL ----
   When user scrolls down more than 20px, we add a CSS class
   "scrolled" to the navbar, which applies a box-shadow.
*/

// Select the navbar element by its ID
const navbar = document.getElementById('navbar');

// addEventListener listens for the 'scroll' event on the window
window.addEventListener('scroll', function () {
  // window.scrollY = how many pixels user has scrolled down
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');    // Adds shadow
  } else {
    navbar.classList.remove('scrolled'); // Removes shadow
  }
});


/* ---- FEATURE 2: HAMBURGER MOBILE MENU ----
   When user clicks the hamburger icon, toggle the mobile menu open/close.
*/

const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobileMenu');

// Toggle means: if open → close; if closed → open
hamburger.addEventListener('click', function () {
  mobileMenu.classList.toggle('open');
});

// Close the menu when any mobile link is clicked
// querySelectorAll returns a list of all elements with that class
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('open'); // Close menu after navigation
  });
});


/* ---- FEATURE 3: SMOOTH SCROLLING ----
   When a nav link is clicked, smoothly animate the scroll to that section.
   We handle this in JS for maximum browser compatibility.
   (CSS scroll-behavior: smooth is also set as a backup in style.css)
*/

// Select all links that start with "#" (internal links)
const allNavLinks = document.querySelectorAll('a[href^="#"]');

allNavLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Stop default jump behavior

    // Get the target section ID from href attribute (e.g., "#about" → "about")
    const targetId = this.getAttribute('href').substring(1);

    // Find the actual element on the page
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // scrollIntoView animates scroll to that element
      targetSection.scrollIntoView({
        behavior: 'smooth', // Animated scroll
        block: 'start'      // Align to top of section
      });
    }
  });
});


/* ---- FEATURE 4: FADE-IN ON SCROLL (Intersection Observer) ----
   Elements with class "fade-in" start invisible (defined in CSS).
   When they enter the viewport, we add class "visible" to reveal them.

   HOW IT WORKS:
   - IntersectionObserver watches elements
   - When element is 10% visible in the viewport, callback fires
   - We add "visible" class → CSS transition animates it in
*/

// Create an observer with options
const observer = new IntersectionObserver(
  function (entries) {
    // entries = array of observed elements that changed visibility
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element is visible: add the "visible" class
        entry.target.classList.add('visible');
        // Stop watching this element (we only animate once)
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1 // Fire when 10% of the element is visible
  }
);

// Find all elements we want to animate (.fade-in and .fade-up)
const fadeElements = document.querySelectorAll('.fade-in, .fade-up');

// Tell the observer to watch each one
fadeElements.forEach(function (el) {
  observer.observe(el);
});


/* ---- FEATURE 5: CONTACT FORM VALIDATION ----
   When the form is submitted, we check:
   - Name is not empty
   - Email is a valid format (using regex)
   - Message is not empty

   If any check fails, show the error message for that field.
   If all pass, show success message.
*/

// Select the form element
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
  // Prevent the default form submission (which refreshes the page)
  event.preventDefault();

  // ---- Get field values ----
  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // .value.trim() removes extra spaces from start/end
  const nameVal    = nameInput.value.trim();
  const emailVal   = emailInput.value.trim();
  const messageVal = messageInput.value.trim();

  // ---- Get error message elements ----
  const nameError    = document.getElementById('nameError');
  const emailError   = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess  = document.getElementById('formSuccess');

  // ---- Reset previous errors ----
  // Remove error styling from all inputs
  [nameInput, emailInput, messageInput].forEach(function (input) {
    input.classList.remove('error');
  });
  // Hide all error messages
  [nameError, emailError, messageError].forEach(function (msg) {
    msg.classList.remove('visible');
  });
  formSuccess.classList.remove('visible');

  // ---- Validation logic ----
  let isValid = true; // Assume form is valid; set to false on any error

  // Check 1: Name must not be empty
  if (nameVal === '') {
    nameInput.classList.add('error');       // Red border
    nameError.classList.add('visible');     // Show error text
    isValid = false;
  }

  // Check 2: Email must match a basic email format
  // Regex pattern: something @ something . something
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    emailInput.classList.add('error');
    emailError.classList.add('visible');
    isValid = false;
  }

  // Check 3: Message must not be empty
  if (messageVal === '') {
    messageInput.classList.add('error');
    messageError.classList.add('visible');
    isValid = false;
  }

  // ---- If all valid: show success ----
  if (isValid) {
    formSuccess.classList.add('visible');
    contactForm.reset(); // Clear the form fields

    // Log to console (useful for viva demonstration)
    console.log('Form submitted successfully!');
    console.log('Name:', nameVal, '| Email:', emailVal);
  }
});
