// ===============================
// PARTICULES
// ===============================
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    particlesContainer.appendChild(particle);
}

// ===============================
// NAVIGATION ENTRE SECTIONS
// ===============================
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Retirer les classes actives
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // Activer le lien cliqué
        link.classList.add('active');

        // Activer la bonne section
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');

        // Scroll top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Fade-in
        setTimeout(() => {
            document.querySelectorAll('.fade-in').forEach(el => {
                el.classList.add('visible');
            });
        }, 100);

        // Fermer le menu mobile
        navMenu.classList.remove('active');
    });
});

// ===============================
// SCROLL ANIMATIONS
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Fade-in initial
setTimeout(() => {
    document.querySelectorAll('#home .fade-in').forEach(el => {
        el.classList.add('visible');
    });
}, 200);

// ===============================
// BURGER MENU
// ===============================
const burger = document.getElementById('burger');
const navMenu = document.querySelector('.nav-links');
const closeMenu = document.getElementById('closeMenu');

// Ouvrir le menu
burger.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Fermer via la croix
if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Fermer quand on clique sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===============================
// DARK MODE
// ===============================
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
}

// ===============================
// MODALE CV
// ===============================
const modal = document.getElementById("cvModal");
const openBtn = document.getElementById("openCvBtn");
const closeBtn = document.querySelector(".close");

if (openBtn && modal) {
    openBtn.onclick = () => modal.style.display = "block";
}

if (closeBtn && modal) {
    closeBtn.onclick = () => modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) modal.style.display = "none";
};

// ===============================
// PROJETS : AFFICHER / MASQUER
// ===============================
function toggleDetails(element) {
    const card = element.closest('.project-card');
    const details = card.querySelector('.project-details');
    const btn = card.querySelector('.view-details-btn');

    if (!details) return;

    if (details.classList.contains('active')) {
        details.classList.remove('active');
        if (btn) btn.textContent = 'Voir les détails ▼';
    } else {
        document.querySelectorAll('.project-details.active').forEach(d => {
            d.classList.remove('active');
            const otherBtn = d.parentElement.querySelector('.view-details-btn');
            if (otherBtn) otherBtn.textContent = 'Voir les détails ▼';
        });

        details.classList.add('active');
        if (btn) btn.textContent = 'Masquer les détails ▲';

        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 300);
    }
}

// ===============================
// ACTIVER LA BONNE SECTION AU CHARGEMENT
// ===============================
window.addEventListener("load", () => {
    const hash = window.location.hash || "#home";
    const targetId = hash.replace("#", "");

    pages.forEach(p => p.classList.remove("active"));
    navLinks.forEach(l => l.classList.remove("active"));

    const targetPage = document.getElementById(targetId);
    if (targetPage) targetPage.classList.add("active");

    const targetLink = document.querySelector(`a[href="${hash}"]`);
    if (targetLink) targetLink.classList.add("active");
});


    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const triggerHeight = window.innerWidth < 600 ? 500 : 300;

        if (window.scrollY > triggerHeight) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });