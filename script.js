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


// home page image fade 
function fadeInImages() {
    const images = document.querySelectorAll('.fade-image');
    let delay = 100; // Initial delay set to 0

    images.forEach((image, index) => {
        setTimeout(() => {
            image.classList.add('visible');
        }, delay);
        delay += 500; // Increase delay for each image (2 seconds apart)
    });
}



// text fade in 

function fadeInText() {
    const texts = document.querySelectorAll('.fade-text');
    let delay = 100; // Initial delay set to 0

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.classList.add('visible');
        }, delay);
        delay += 500; // Increase delay for each text element (2 seconds apart)
    });
}

window.onload = function() {
    fadeInImages();
    fadeInText(); }
