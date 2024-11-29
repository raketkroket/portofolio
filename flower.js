// Get the elements for text and scene container
const enterText = document.getElementById('enterText');
const sceneContainer = document.getElementById('sceneContainer');

// Track mouse movement to position the text
document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    // Position the text relative to the cursor
    enterText.style.left = `${x + 10}px`;  // Adding a small offset for better visibility
    enterText.style.top = `${y + 10}px`;
});

// Add a click event to enter the 3D scene
document.addEventListener('click', function() {
    // Add a slight scale-up animation on click
    enterText.classList.add('clicking');

    // Wait for a short delay before starting the fade-out effect
    setTimeout(function() {
        // Fade-out the "Click to Enter" text
        enterText.style.opacity = 0;

        // After the fade-out, show the scene with a fade-in effect
        setTimeout(function() {
            enterText.style.display = 'none'; // Hide the "Click to Enter" text completely
            sceneContainer.style.display = 'block'; // Show the 3D scene
            sceneContainer.style.opacity = 1; // Fade-in the 3D scene
        }, 400); // Wait until the text has faded out
    }, 100); // Slight delay before starting the fade-out animation
});
