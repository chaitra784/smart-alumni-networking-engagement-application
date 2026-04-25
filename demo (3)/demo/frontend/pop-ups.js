document.addEventListener('DOMContentLoaded', () => {
    // Navigation elements
    const mainPage = document.getElementById('main-page');
    const queriesPage = document.getElementById('queries-page');
    const searchOverlay = document.getElementById('search-overlay');
    
    // Buttons
    const handIcon = document.getElementById('hand-icon');
    const backBtn = document.getElementById('back-to-chat');
    const searchBtn = document.getElementById('search-btn');
    const closeSearch = document.getElementById('close-search');

    // Show Queries Page
    handIcon.addEventListener('click', () => {
        mainPage.classList.add('hidden');
        queriesPage.classList.remove('hidden');
    });

    // Back to Chat
    backBtn.addEventListener('click', () => {
        queriesPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });

    // Search Toggle
    searchBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('hidden');
        document.getElementById('search-box').focus();
    });

    closeSearch.addEventListener('click', () => {
        searchOverlay.classList.add('hidden');
    });

    // Multi-select Audience logic
    const chips = document.querySelectorAll('.chip');
    const roleIndicator = document.getElementById('role-indicator');

    const roleIcons = {
        alumni: 'fa-graduation-cap',
        students: 'fa-user-graduate',
        professors: 'fa-chalkboard-user',
        admins: 'fa-user-shield'
    };

    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chip.classList.toggle('active');
            updateRoleIcon();
        });
    });

    function updateRoleIcon() {
        const activeChips = document.querySelectorAll('.chip.active');
        if (activeChips.length > 0) {
            // Take the latest selected role to show the icon
            const lastRole = activeChips[activeChips.length - 1].dataset.value;
            roleIndicator.innerHTML = `<i class="fa-solid ${roleIcons[lastRole]}"></i>`;
        } else {
            roleIndicator.innerHTML = `<i class="fa-solid fa-user"></i>`;
        }
    }
});