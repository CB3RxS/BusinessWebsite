// products.js - menu filter for the Products page only

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-category');
const menuColumns = document.querySelectorAll('.menu-column');
const menuGrid = document.querySelector('.menu-grid');

// Safety check: only run on pages that actually have the filter
if (filterButtons.length > 0 && menuGrid) {

    // Show only the cards that match the chosen category
    function applyFilter(category) {

        // 1. Show or hide each card
        menuCards.forEach(function (card) {
            const matches = (category === 'all') || (card.dataset.category === category);
            card.hidden = !matches;
        });

        // 2. Hide any column that has no visible cards left
        let visibleColumns = 0;
        menuColumns.forEach(function (column) {
            const hasVisibleCard = column.querySelector('.menu-category:not([hidden])') !== null;
            column.hidden = !hasVisibleCard;
            if (hasVisibleCard) {
                visibleColumns++;
            }
        });

        // 3. If only one column is left, let the CSS center it
        menuGrid.classList.toggle('single-column', visibleColumns === 1);
    }

    // Listen for a click on each button
    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {

            // Un-select every button, then select the clicked one
            filterButtons.forEach(function (other) {
                other.classList.remove('active');
                other.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            // Filter using the button's data-filter value
            applyFilter(button.dataset.filter);
        });
    });
}