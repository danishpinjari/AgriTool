// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.bottom-nav-item');
    navItems.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });
});

function handleResize() {
    const navbar = document.querySelector('.bottom-navbar');
    if (window.innerWidth <= 767.98) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

// Initial check
handleResize();

// Add event listener for window resize
window.addEventListener('resize', handleResize);
