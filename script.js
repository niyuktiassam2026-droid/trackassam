document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Fixed Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents click from instantly bubbling up and closing
            mainNav.classList.toggle('active');
        });

        // Close mobile menu smoothly if clicked outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.site-header') && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    }

    // 2. Reading Progress Bar
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }

    // 3. Dynamic Footer Year Update
    const currentYearEl = document.getElementById("current-year");
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
});
