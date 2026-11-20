// GLOBAL JAVASCRIPT

// Mobile Navigation
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

const mobileBreakpoint = window.matchMedia('(max-width: 700px)');

if (menuIcon && sidebar) {

    // Open sidebar
    function openMenu() {
        sidebar.classList.add('open');
        menuIcon.classList.add('active');
        document.body.classList.add('menu-open');

        menuIcon.setAttribute('aria-expanded', 'true');
    }

    // Close sidebar
    function closeMenu() {
        sidebar.classList.remove('open');
        menuIcon.classList.remove('active');
        document.body.classList.remove('menu-open');

        menuIcon.setAttribute('aria-expanded', 'false');
    }

    // Toggle sidebar
    menuIcon.addEventListener('click', (event) => {

        event.stopPropagation();

        if (sidebar.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    // Close when clicking outside
    document.addEventListener('click', (event) => {

        if (
            sidebar.classList.contains('open') &&
            !sidebar.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            closeMenu();
        }

    });

    // Close when selecting a navigation link
    sidebarLinks.forEach((link) => {

        link.addEventListener('click', () => {
            closeMenu();
        });

    });

    // Close when pressing Escape
    document.addEventListener('keydown', (event) => {

        if (
            event.key === 'Escape' &&
            sidebar.classList.contains('open')
        ) {
            closeMenu();
            menuIcon.focus();
        }

    });

    // Close sidebar when returning to desktop layout
    mobileBreakpoint.addEventListener('change', (event) => {

        if (!event.matches) {
            closeMenu();
        }

    });

}

// =========================
// LIGHT / DARK MODE
// =========================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-toggle-icon');
const themeText = document.querySelector('.theme-toggle-text');

// Apply the selected theme
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    const isDark = theme === 'dark';

    // Update the theme button
    if (themeToggle && themeIcon && themeText) {
        themeIcon.textContent = isDark ? '☀' : '☾';
        themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';

        themeToggle.setAttribute('aria-pressed', isDark);
        themeToggle.setAttribute(
            'aria-label',
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
        );
    }
}

// Load the saved theme when the page opens
let savedTheme = 'light';

try {
    savedTheme = localStorage.getItem('perkup-theme') || 'light';
} catch (error) {
    // Use light mode if browser storage is unavailable
}

applyTheme(savedTheme);

// Toggle between light and dark mode
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme =
            document.documentElement.dataset.theme || 'light';

        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        applyTheme(newTheme);

        // Remember the selected theme
        try {
            localStorage.setItem('perkup-theme', newTheme);
        } catch (error) {
            // Theme still works even if browser storage is unavailable
        }
    });
}
