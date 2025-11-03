// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const toggleIcon = document.getElementById('toggleIcon');
    const body = document.body;

    // Update GitHub icons based on theme
    function updateGitHubIcons() {
        const githubIcons = document.querySelectorAll('.github-icon');
        githubIcons.forEach(icon => {
            if (body.classList.contains('dark-mode')) {
                icon.src = 'lightDark/githubBlack.png';
            } else {
                icon.src = 'lightDark/githubWhite.png';
            }
        });
    }

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

    // Update GitHub icons on initial load
    updateGitHubIcons();

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
        
        updateGitHubIcons();
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

    // Typing animation for "hello" in multiple languages
    const typingElement = document.getElementById('typedText');
    const words = ['xin chào', 'hello', '안녕하세요', '你好', 'hola', 'bonjour', 'ciao', 'こんにちは', 'guten tag', 'olá', 'привет'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // milliseconds per character
    let deletingSpeed = 50; // milliseconds per character
    let pauseTime = 2000; // milliseconds to pause after typing

    function typeText() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Delete characters
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeText, 500); // Pause before typing next word
                return;
            }
            
            setTimeout(typeText, deletingSpeed);
        } else {
            // Type characters
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentWord.length) {
                // Finished typing, wait then start deleting
                isDeleting = true;
                setTimeout(typeText, pauseTime);
                return;
            }
            
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start the typing animation
    setTimeout(typeText, 500);
});

