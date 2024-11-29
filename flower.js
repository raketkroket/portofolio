const enterText = document.getElementById('enterText');
const sceneContainer = document.getElementById('sceneContainer');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

// Mouse Tracking for Text
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
        aboutLink.classList.remove('hidden'); // Show About Me
        contactLink.classList.remove('hidden'); // Show Contact
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
