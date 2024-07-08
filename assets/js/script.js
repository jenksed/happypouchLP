document.addEventListener("DOMContentLoaded", function() {
    const toggleNavbarButton = document.getElementById('toggle-navbar');
    const toggleNavbarMobileButton = document.getElementById('toggle-navbar-mobile');
    const navbar = document.getElementById('navbar');
    const mainContent = document.querySelector('.main-content');

    toggleNavbarButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    toggleNavbarMobileButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Optional: Scroll to top button
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = "↑";
    scrollToTopButton.classList.add('scroll-to-top');
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
});