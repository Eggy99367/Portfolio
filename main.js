// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation background change on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.backgroundColor = 'var(--background)';
    }
});

// Mobile menu toggle
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

logo.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    }
}); 