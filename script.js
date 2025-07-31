document.addEventListener('DOMContentLoaded', function() {

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Teacher Carousel
    const carousel = document.getElementById('teacher-carousel');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const teacherCards = document.querySelectorAll('.teacher-card');

    if (carousel) {
        let currentIndex = 0;
        let itemsToShow = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 4);
        const totalItems = teacherCards.length;

        function updateCarousel() {
            const itemWidth = carousel.querySelector('.teacher-card').offsetWidth;
            const newTransform = -currentIndex * itemWidth;
            carousel.style.transform = `translateX(${newTransform}px)`;

            // Disable/Enable buttons
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalItems - itemsToShow;

            prevBtn.classList.toggle('opacity-50', prevBtn.disabled);
            nextBtn.classList.toggle('opacity-50', nextBtn.disabled);
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalItems - itemsToShow) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        window.addEventListener('resize', () => {
            itemsToShow = window.innerWidth < 768 ? 1 : (window.innerWidth < 1024 ? 2 : 4);
            // Reset index if it's out of bounds after resize
            if (currentIndex > totalItems - itemsToShow) {
                currentIndex = totalItems - itemsToShow;
            }
            updateCarousel();
        });

        // Initial setup
        updateCarousel();
    }
});
