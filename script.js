const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown.querySelector('a[aria-haspopup]');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');
const menuItems = dropdownMenu.querySelectorAll('a[role="menuitem"]');

let isOpen = false;

function toggleMenu() {
    isOpen = !isOpen;
    dropdownLink.setAttribute('aria-expanded', isOpen);
    dropdownMenu.setAttribute('aria-hidden', !isOpen);
    if (isOpen) {
        dropdownMenu.style.opacity = '1';
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.transform = 'translateY(4px)';
        menuItems[0].focus();
    } else {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.transform = 'translateY(-8px)';
    }
}

dropdownLink.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

dropdownLink.addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

menuItems.forEach((item, index) => {
    item.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (index + 1) % menuItems.length;
            menuItems[nextIndex].focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
            menuItems[prevIndex].focus();
        } else if (e.key === 'Escape') {
            toggleMenu();
            dropdownLink.focus();
        }
    });
});

// Close menu on outside click or focus loss
document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
        if (isOpen) toggleMenu();
    }
});

const links = document.querySelectorAll('.dropdown-menu a');

links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Modificação DOM para definir as imagens
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona as imagens pelos IDs dos containers pai
    const imgLeonardo = document.querySelector('#leonardo img');
    const imgJulia = document.querySelector('#julia img');
    const imgKelly = document.querySelector('#kelly img');

    // Define os src via DOM
    if (imgLeonardo) imgLeonardo.src = 'imagens/leonardo.jpeg';
    if (imgJulia) imgJulia.src = 'imagens/julia.jpeg';
    if (imgKelly) imgKelly.src = 'imagens/kelly.jpeg';
});