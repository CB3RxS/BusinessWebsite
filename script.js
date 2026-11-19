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
