// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleIcon.src = 'lightDark/light.png';
        toggleIcon.alt = 'Toggle light mode';
    } else {
        body.classList.remove('dark-mode');
        toggleIcon.src = 'lightDark/dark.png';
        toggleIcon.alt = 'Toggle dark mode';
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            toggleIcon.src = 'lightDark/light.png';
            toggleIcon.alt = 'Toggle light mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleIcon.src = 'lightDark/dark.png';
            toggleIcon.alt = 'Toggle dark mode';
            localStorage.setItem('theme', 'light');
        }
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll fade indicator functionality
    const scrollFadeIndicator = document.getElementById('scrollFadeIndicator');
    
    function updateScrollFadeIndicator() {
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
        
        // Show indicator when near top, hide when scrolled down significantly
        if (scrollPosition < 100 || scrollPercentage < 0.95) {
            scrollFadeIndicator.classList.remove('hidden');
        } else {
            scrollFadeIndicator.classList.add('hidden');
        }
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateScrollFadeIndicator);
    
    // Initial check
    updateScrollFadeIndicator();
});

