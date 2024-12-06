document.addEventListener('DOMContentLoaded', function () {
  // Function to hide all sections
  function hideAllSections() {
    const sections = document.querySelectorAll('.content'); // All sections with the class "content"
    sections.forEach(section => section.classList.remove('visible')); // Remove 'visible' class to hide sections
  }

  // Function to reset link styles
  function resetLinkStyles() {
    const links = document.querySelectorAll('nav a'); // Select all navigation links
    links.forEach(link => link.classList.remove('active')); // Remove the active class from all links
  }

  // Function to show a section and activate a link
  function showSection(sectionId, linkId) {
    hideAllSections(); // Hide all sections
    resetLinkStyles(); // Reset all navigation link styles

    // Show the targeted section by adding the 'visible' class
    const section = document.getElementById(sectionId);
    section.classList.add('visible'); // Add the 'visible' class to show the section

    // Set the active link
    const link = document.getElementById(linkId);
    link.classList.add('active'); // Add 'active' class to highlight the link
  }

  // Initial Load: Show Homepage
  showSection('homepage', 'homepageLink');

  // Add event listeners for navigation links
  document.getElementById('homepageLink').addEventListener('click', function () {
    showSection('homepage', 'homepageLink');
  });

  document.getElementById('serviceLink').addEventListener('click', function () {
    showSection('servicepage', 'serviceLink');
  });

  document.getElementById('contactLink').addEventListener('click', function () {
    showSection('contactpage', 'contactLink');
  });
  
  // Add event listener for the contact form submit button
  const submitButton = document.querySelector('form button[type="submit"]');
  submitButton.addEventListener('click', function () {
    const name = document.querySelector('input[name="name"]').value; // Get the name input value
    const email = document.querySelector('input[name="email"]').value; // Get the email input value
    const message = document.querySelector('textarea[name="message"]').value; // Get the message input value
     alert(`Thank you for your message, We'll get back to you shortly.`);

  });
    resetform();
    function resetform() {
      document.querySelector('form input[name="name"]').value = "";
      document.querySelector('form input[name="email"]').value = "";
      document.querySelector('form textarea[name="message"]').value = "";
    }
    
});
  
