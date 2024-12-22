document.addEventListener('DOMContentLoaded', function () {
    // Check if the sidebar state is stored
    const sidebarState = JSON.parse(localStorage.getItem('sidebarState')) || {};

    // Function to expand chapters based on stored state
    function setSidebarState() {
        for (const chapter in sidebarState) {
            if (sidebarState[chapter]) {
                const chapterMenu = document.getElementById(chapter + 'Menu');
                if (chapterMenu) {
                    chapterMenu.classList.add('show');
                }
            }
        }
    }

    // Function to save the current sidebar state
    function saveSidebarState() {
        localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
    }

    // Initialize the sidebar state
    setSidebarState();

    // Add event listeners to toggle the sidebar state
    document.querySelectorAll('.list-group-item[data-toggle="collapse"]').forEach(item => {
        item.addEventListener('click', function () {
            const chapterId = this.getAttribute('data-chapter');
            sidebarState[chapterId] = !sidebarState[chapterId]; // Toggle the state
            saveSidebarState();
        });
    });
});
