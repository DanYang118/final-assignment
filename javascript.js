// Add event listener for the link1
document.getElementById('homepage').addEventListener('click', function() {
    console.log("homepage link clicked");
    
    // Remove classes for other sections
    document.body.classList.remove("servicepage", "contactpage");
    document.body.classList.add('homepage');
});