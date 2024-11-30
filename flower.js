const enterText = document.getElementById('enterText');
const sceneContainer = document.getElementById('sceneContainer');
const topMenu = document.getElementById('topMenu');
const workSection = document.getElementById('workSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');
const hamburgerMenu = document.getElementById('hamburgerMenu');

// Mouse Tracking for "Click to Enter" text
document.addEventListener('mousemove', (event) => {
    enterText.style.left = `${event.clientX + 10}px`;
    enterText.style.top = `${event.clientY + 10}px`;
});

// "Click to Enter" Functionality
document.addEventListener('click', () => {
    enterText.style.opacity = 0; // Fade out text
    setTimeout(() => {
        enterText.style.display = 'none'; // Hide text
        sceneContainer.style.display = 'block'; // Show 3D viewer
        sceneContainer.style.opacity = 1; // Fade in
        
        // Add 'display-mode' class to body to make hamburger menu visible
        document.body.classList.add('display-mode');
        
        // Only show the navigation menu after entering display mode
        topMenu.style.display = 'flex'; // Set to flex to make it visible

        // Use a slight delay to avoid sections flashing
        setTimeout(() => {
            workSection.style.display = 'flex'; // Show Work section
            aboutSection.style.display = 'flex'; // Show About section
            contactSection.style.display = 'flex'; // Show Contact section
        }, 500); // Delay showing sections for smoother transition
    }, 400);
});

// Scroll Listener for Active Link Highlight
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#topMenu a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Mobile Hamburger Menu Functionality
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class for the top menu on mobile
    topMenu.classList.toggle('active'); // This will toggle the visibility of the top menu
});

// Initially hide the top menu on the "Click to Enter" page (before "Enter" click)
document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.classList.contains('display-mode')) {
        // Hide the navigation menu initially (on the "Click to Enter" page)
        topMenu.style.display = 'none'; // Hide the navigation menu
    }
});
