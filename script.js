document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');

    // Function to toggle active states
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Event listener for hamburger click
    hamburger.addEventListener('click', function() {
        toggleMenu();
    });

    // Event listener for overlay click to close menu
    overlay.addEventListener('click', function() {
        toggleMenu();
    });

    // Optional: Change header background on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});


