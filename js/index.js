// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

// Function to apply the stored theme on page load
function applyStoredTheme() {
    const storedTheme = window.localStorage.getItem('theme');
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
        window.localStorage.setItem('theme', 'dark'); // Store the dark theme
    } else {
        lightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
        window.localStorage.setItem('theme', 'light'); // Store the light theme
    }
});

document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('hidden');
    });
});

// Apply the stored theme on page load
window.addEventListener('DOMContentLoaded', applyStoredTheme);
