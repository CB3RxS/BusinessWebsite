// Global JavaScript for whole site

// Hamburger Menu & Sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');

// Safety check: only run if both elements exist on this page
if (menuIcon && sidebar) {

    function openMenu() {
        menuIcon.classList.add('active');
        sidebar.classList.add('open');
        menuIcon.setAttribute('aria-expanded', 'true');   // NEW: tells screen readers it's open
    }

    function closeMenu() {
        menuIcon.classList.remove('active');
        sidebar.classList.remove('open');
        menuIcon.setAttribute('aria-expanded', 'false');  // NEW
    }

    // Toggle the menu when the hamburger is clicked
    menuIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // stops the document click below from closing it immediately
        if (sidebar.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close the menu when the user clicks outside the sidebar
    document.addEventListener('click', (event) => {
        if (sidebar.classList.contains('open') && !sidebar.contains(event.target)) {
            closeMenu();
        }
    });

    // NEW: Escape closes the menu and returns focus to the button
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidebar.classList.contains('open')) {
            closeMenu();
            menuIcon.focus();
        }
    });
}