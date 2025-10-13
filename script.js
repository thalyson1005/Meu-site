// Funções de interação para o aplicativo DSP
const setupCurrentYear = () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};

const setupMobileMenu = () => {
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
};

const setupFaq = () => {
    const items = document.querySelectorAll('.faq-item');

    items.forEach((item) => {
        const button = item.querySelector('.faq-question');
        button?.addEventListener('click', () => {
            const isActive = item.classList.toggle('active');
            button.setAttribute('aria-expanded', String(isActive));

            if (isActive) {
                items.forEach((otherItem) => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherButton = otherItem.querySelector('.faq-question');
                        otherButton?.setAttribute('aria-expanded', 'false');
                    }
                });
            }
        });
    });
};

const setupSmoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');
            if (!hash || hash === '#') return;

            const target = document.querySelector(hash);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    setupCurrentYear();
    setupMobileMenu();
    setupFaq();
    setupSmoothScroll();
});
