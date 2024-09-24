document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const body = document.body; // Select the body element

    // Function to toggle active states and body overflow
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');

        // Check if the nav is active and toggle body overflow
        if (nav.classList.contains('active')) {
            body.style.overflowY = 'hidden'; // Disable vertical scrolling
        } else {
            body.style.overflowY = ''; // Re-enable vertical scrolling
        }
    }

    // Event listener for hamburger click
    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    // Event listener for overlay click to close menu
    overlay.addEventListener('click', function() {
        toggleMenu();
    });
});
