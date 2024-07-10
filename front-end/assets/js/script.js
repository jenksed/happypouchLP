document.addEventListener("DOMContentLoaded", function() {
    // Toggle Navbar
    const toggleNavbarButton = document.getElementById('toggle-navbar');
    const toggleNavbarMobileButton = document.getElementById('toggle-navbar-mobile');
    const navbar = document.getElementById('navbar');

    function toggleNavbar() {
        navbar.classList.toggle('active');
    }

    toggleNavbarButton.addEventListener('click', toggleNavbar);
    toggleNavbarMobileButton.addEventListener('click', toggleNavbar);

    // Scroll to Top Button
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

    // Testimonial Carousel
    const carousel = document.querySelector('.testimonial-carousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let scrollAmount = 0;
    const scrollStep = 300; // Width of each testimonial card + margin
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    function scrollCarousel(direction) {
        if (direction === 'next' && scrollAmount < maxScroll) {
            scrollAmount += scrollStep;
        } else if (direction === 'prev' && scrollAmount > 0) {
            scrollAmount -= scrollStep;
        }
        carousel.style.transform = `translateX(-${scrollAmount}px)`;
        toggleButtons();
    }

    function toggleButtons() {
        prevBtn.style.display = scrollAmount > 0 ? 'block' : 'none';
        nextBtn.style.display = scrollAmount < maxScroll ? 'block' : 'none';
    }

    nextBtn.addEventListener('click', () => scrollCarousel('next'));
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));

    toggleButtons();
});