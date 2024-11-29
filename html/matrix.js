const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Triangle pattern variables
const triangleCount = 50; // Number of triangles to draw
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD733"]; // Colors for triangles

// Function to generate a random value
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to draw the triangles
function drawTriangles(scrollY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Update background color based on scroll position
    const color = colors[Math.floor(scrollY / 100) % colors.length];
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill background with the selected color

    // Draw triangles based on scroll position
    for (let i = 0; i < triangleCount; i++) {
        const size = random(50, 150); // Random size for each triangle
        const x = random(0, canvas.width);
        const y = random(0, canvas.height);

        const triangleHeight = Math.sin(scrollY / 100 + i) * 100 + 50; // Dynamic height based on scroll position

        // Draw a triangle with dynamic properties
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size / 2, y - triangleHeight);
        ctx.closePath();
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
    }
}

// Function to handle the scroll event and draw the triangles
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Get the vertical scroll position
    drawTriangles(scrollY); // Redraw the triangles based on scroll position
});

// Dynamically resize the canvas on window resize
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawTriangles(window.scrollY); // Redraw triangles when resizing
});

// Initial draw
drawTriangles(window.scrollY);
