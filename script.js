document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        toggleMenu();
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideMenuIcon) {
            closeMenu();
        }
    });

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    function closeMenu() {
        menu.classList.remove('open');
    }
});
