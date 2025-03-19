// Define the loading process
let percentage = 0;
const percentageText = document.getElementById('percentage');
const loadingProgress = document.getElementById('loading-progress');

// Simulate loading process
const loadingInterval = setInterval(() => {
    percentage += 1;
    percentageText.textContent = `${percentage}%`;
    loadingProgress.style.width = `${percentage}%`;

    // When loading reaches 100%, start the fade transition to index.html
    if (percentage === 100) {
        clearInterval(loadingInterval);

        // Add fade class to body
        document.body.classList.add('fade');

        // After a delay (fade transition), redirect to index.html
        setTimeout(() => {
            window.location.href = 'index.html'; // Change this to your main page URL
        }, 1000); // Wait 1 second for the fade effect
    }
}, 50); // Change 50 for different loading speeds (lower = faster)
