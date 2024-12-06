// Function to reset button styles
function resetButtonStyles() {
  const links = document.querySelectorAll('nav a'); // Select all navigation links
  links.forEach(link => {
    link.classList.remove('active'); // Remove the active class
  });
}

// Add event listeners for navigation links
document.querySelector('nav a[href="home"]').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  console.log("Homepage link clicked");

  // Reset styles and set active class
  resetButtonStyles();
  this.classList.add('active');

  // Update body classes
  document.body.className = ''; // Reset all body classes
  document.body.classList.add('homepage');
});

document.querySelector('nav a[href="service"]').addEventListener('click', function (event) {
  event.preventDefault();
  console.log("Service page link clicked");

  // Reset styles and set active class
  resetButtonStyles();
  this.classList.add('active');

  // Update body classes
  document.body.className = '';
  document.body.classList.add('servicepage');
});

document.querySelector('nav a[href="contact"]').addEventListener('click', function (event) {
  event.preventDefault();
  console.log("Contact page link clicked");

  // Reset styles and set active class
  resetButtonStyles();
  this.classList.add('active');

  // Update body classes
  document.body.className = '';
  document.body.classList.add('contactpage');
});

  