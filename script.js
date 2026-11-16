// Global JavaScript for whole site


//Hamburger Menu & Sidebar
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');

// Toggle the 'X' icon & pop-out sidebar menu on click
menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the document click listener from immediately closing it
    menuIcon.classList.toggle('active');
    sidebar.classList.toggle('open');
});

// Close the menu when the user clicks outside the sidebar
document.addEventListener('click', (event) => {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target)) {
        menuIcon.classList.remove('active');
        sidebar.classList.remove('open');
    }
});

