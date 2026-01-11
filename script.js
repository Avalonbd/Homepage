/* =====================================================
   AVALON SECURITY SERVICES LIMITED - Company Profile
   JavaScript Functionality
   ===================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all modules
    initThemeToggle();   // Theme switcher (must be first)
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initCounterAnimation();
    initContactForm();
});

/* ---------- Theme Toggle ---------- */
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Get saved theme or detect system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('avalon-theme');
        if (savedTheme) return savedTheme;

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark';  // Default to dark
    }

    // Apply theme
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('avalon-theme', theme);
    }

    // Initialize with preferred theme
    setTheme(getPreferredTheme());

    // Toggle button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const currentTheme = html.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system preference changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
            if (!localStorage.getItem('avalon-theme')) {
                setTheme(e.matches ? 'light' : 'dark');
            }
        });
    }
}

/* ---------- Navigation ---------- */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active nav link based on scroll position
        updateActiveNavLink();
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');

            // Animate hamburger
            const hamburger = navToggle.querySelector('.hamburger');
            if (navMenu.classList.contains('active')) {
                hamburger.style.background = 'transparent';
                hamburger.style.transform = 'rotate(45deg)';
            } else {
                hamburger.style.background = '';
                hamburger.style.transform = '';
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            const hamburger = navToggle.querySelector('.hamburger');
            hamburger.style.background = '';
            hamburger.style.transform = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/* ---------- Update Active Nav Link ---------- */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ---------- Scroll Animations ---------- */
function initScrollAnimations() {
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.section-header, .about-content, .about-image, .service-card, ' +
        '.why-card, .client-category, .client-item, .leader-card, ' +
        '.guard-card, .note-card, .contact-info, .contact-form-container, ' +
        '.feature-item, .why-image-section'
    );

    // Create intersection observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class with delay based on index
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                const delay = index * 100;

                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial styles and observe
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ---------- Counter Animation ---------- */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = target / steps;

    let current = 0;

    const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepDuration);
}

/* ---------- Contact Form ---------- */
function initContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Simple validation
            if (!data.name || !data.email) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent. We will contact you soon.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

/* ---------- Notification System ---------- */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
    `;

    // Add styles
    const styles = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            background: #1a365d;
            color: white;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        }
        .notification-success {
            background: linear-gradient(135deg, #059669, #10b981);
        }
        .notification-error {
            background: linear-gradient(135deg, #dc2626, #ef4444);
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
            opacity: 0.7;
        }
        .notification-close:hover {
            opacity: 1;
        }
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;

    // Add styles to head if not already added
    if (!document.querySelector('#notification-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'notification-styles';
        styleEl.textContent = styles;
        document.head.appendChild(styleEl);
    }

    document.body.appendChild(notification);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/* ---------- Parallax Effect (Optional Enhancement) ---------- */
function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroContent = hero.querySelector('.hero-content');

            if (scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    }
}

// Initialize parallax if desired (uncomment to enable)
// initParallax();

/* ---------- Print Function Enhancement ---------- */
window.printProfile = function () {
    // Hide any notifications before printing
    const notifications = document.querySelectorAll('.notification');
    notifications.forEach(n => n.remove());

    // Add print class for any last-minute adjustments
    document.body.classList.add('printing');

    // Trigger print
    window.print();

    // Remove print class after printing
    setTimeout(() => {
        document.body.classList.remove('printing');
    }, 1000);
};

/* ---------- Lazy Loading Images ---------- */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
// initLazyLoading();
