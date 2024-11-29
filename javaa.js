// Toggling menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Navigating to the "About" or "Work" page when "Click to Enter" is clicked
function goToPage() {
    window.location.href = '#about';  // Change this as needed to go to about or work page
}

// Smooth scroll effect for text animation
document.querySelector('.page-content h1').addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.s-char');
    elements.forEach(el => {
        el.style.opacity = 1;
    });
});
// Get the "Click to Enter" element
const clickToEnter = document.getElementById('clickToEnter');

// Listen for mouse movement
document.addEventListener('mousemove', function(event) {
    // Get the mouse's X and Y coordinates
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the "Click to Enter" button to follow the cursor
    clickToEnter.style.left = `${mouseX + 10}px`;  // Adding 10px offset from the cursor
    clickToEnter.style.top = `${mouseY + 10}px`;   // Adding 10px offset from the cursor
});
