const enterText = document.getElementById('enterText');
const sceneContainer = document.getElementById('sceneContainer');
const topMenu = document.getElementById('topMenu');
const workSection = document.getElementById('workSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const fallbackMessage = document.getElementById('fallbackMessage');

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
        document.body.classList.add('display-mode');
        
        // Handle 3D model load failure
        const splineViewer = document.querySelector('spline-viewer');
        splineViewer.addEventListener('error', () => {
            fallbackMessage.classList.remove('hidden');
        });
        
        topMenu.style.display = 'flex'; // Set to flex to make it visible

        setTimeout(() => {
            workSection.style.display = 'flex'; // Show Work section
            aboutSection.style.display = 'flex'; // Show About section
            contactSection.style.display = 'flex'; // Show Contact section
        }, 500); // Delay for smoother transition
    }, 400);
});

// Scroll Listener for Active Link Highlight with Debounce
let debounceTimeout;
document.addEventListener('scroll', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
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
    }, 100); // Debounce timeout
});

// Mobile Hamburger Menu Functionality
hamburgerMenu.addEventListener('click', () => {
    topMenu.classList.toggle('active'); // Toggle the visibility of the top menu
});
