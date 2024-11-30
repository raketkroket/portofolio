document.addEventListener('DOMContentLoaded', () => {
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
            sceneContainer.style.display = 'flex'; // Ensure it's set to flex for centering
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

    // Mobile Hamburger Menu Functionality
    hamburgerMenu.addEventListener('click', () => {
        topMenu.classList.toggle('active'); // Toggle the visibility of the top menu
    });
});
