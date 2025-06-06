const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Helper function to set icon
function setThemeIcon() {
  if (body.classList.contains('light-mode')) {
    themeToggle.textContent = "☀️";
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
  } else {
    themeToggle.textContent = "🌙";
    themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
  }
}

// Set initial icon
setThemeIcon();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  setThemeIcon();
});