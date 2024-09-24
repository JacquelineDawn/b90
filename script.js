document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const html = document.documentElement; // Get the html element as well

    // Function to toggle active states and body overflow
    function toggleMenu() {
        const isActive = nav.classList.toggle('active');
        hamburger.classList.toggle('active', isActive);
        overlay.classList.toggle('active', isActive);
        
        // Toggle scrolling
        const overflowValue = isActive ? 'hidden' : '';
        body.style.overflow = overflowValue;
        html.style.overflow = overflowValue;
    }

    // Event listeners for hamburger and overlay click
    [hamburger, overlay].forEach(element => {
        element.addEventListener('click', toggleMenu);
    });
});
