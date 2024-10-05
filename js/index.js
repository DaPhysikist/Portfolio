// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Function to apply the stored theme on page load
function applyStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    const body = document.body;

    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
    } else {
        body.classList.remove('dark-mode');
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
    }
}

// Toggle theme and update localStorage
themeToggle.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.toggle('dark-mode')) {
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark'); // Store the dark theme
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
        localStorage.setItem('theme', 'light'); // Store the light theme
    }
});

// Apply the stored theme on page load
window.addEventListener('DOMContentLoaded', applyStoredTheme);
