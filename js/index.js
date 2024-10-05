// Theme Toggle Script
const themeToggle = document.getElementById('theme-toggle');
const lightIcon = document.getElementById('light-icon');
const darkIcon = document.getElementById('dark-icon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    lightIcon.style.display = lightIcon.style.display === 'none' ? 'block' : 'none';
    darkIcon.style.display = darkIcon.style.display === 'none' ? 'block' : 'none';
});