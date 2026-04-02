// Liquid Glass Interactive Effects

// Particle generation for background
function generateParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) {
        const container = document.createElement('div');
        container.className = 'particles';
        document.body.insertBefore(container, document.body.firstChild);
    }

    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        document.querySelector('.particles').appendChild(particle);
    }
}

// Smooth scroll behavior
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

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .cta').forEach(card => {
    observer.observe(card);
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Card elevation on hover
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.01)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Dynamic background on mouse move
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    
document.body.style.backgroundPosition = `${x}% ${y}%`;
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateParticles();
    console.log('RocknVibe Liquid Glass UI Initialized');
});

// Responsive behavior
window.addEventListener('resize', () => {
    console.log(`Window resized: ${window.innerWidth}x${window.innerHeight}`);
});
