document.addEventListener('DOMContentLoaded', function() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // Loading Screen
    const loadingScreen = document.getElementById('loading');
    const nav = document.getElementById('nav');

    // Hide loading screen after page load
    window.addEventListener('load', () => {
        gsap.to(loadingScreen, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => {
                loadingScreen.style.display = 'none';
                initAnimations();
            }
        });
    });

    // Progress Bar
    const progressBar = document.getElementById('progress');
    ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: self => {
            progressBar.style.width = (self.progress * 100) + '%';
        }
    });

    // Enhanced Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Smooth cursor animation with GSAP ticker
    gsap.ticker.add(() => {
        posX += (mouseX - posX) / 12;
        posY += (mouseY - posY) / 12;

        gsap.set(cursor, { x: posX - 10, y: posY - 10 });
        gsap.set(cursorDot, { x: mouseX - 3, y: mouseY - 3 });
    });

    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Cursor interactions
    document.addEventListener('mouseenter', () => {
        gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.3 });
    });

    document.addEventListener('mouseleave', () => {
        gsap.to([cursor, cursorDot], { opacity: 0, duration: 0.3 });
    });

    // Initialize all animations
    function initAnimations() {
        // Show navigation
        gsap.to(nav, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: 'power3.out'
        });

        // Hero section animations
        const heroTl = gsap.timeline({ delay: 0.3 });
        heroTl.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
        .to('.hero-subtitle', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.8')
        .to('.hero-cta', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .to('.scroll-down-indicator', {
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut'
        }, '-=0.4');

        // Fade-in elements animation
        gsap.utils.toArray('.fade-in').forEach(element => {
            gsap.fromTo(element,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Info cards staggered animation
        gsap.fromTo('.info-card',
            { opacity: 0, y: 80, scale: 0.8 },
            {
                scrollTrigger: {
                    trigger: '.info-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'back.out(1.7)'
            }
        );

        // Day cards enhanced animation
        gsap.utils.toArray('.day-card').forEach((card, index) => {
            const header = card.querySelector('.day-header-sticky');
            const content = card.querySelector('.day-content-wrapper');
            const title = card.querySelector('.day-title');
            const scheduleItems = card.querySelectorAll('.schedule-item');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 75%',
                    toggleActions: 'play none none none',
                }
            });

            // Initial card fade
            tl.to(card, { opacity: 1, duration: 0.6 });

            // Staggered element animations
            if (header) {
                tl.fromTo(header,
                    { opacity: 0, x: -60, rotationY: -15 },
                    { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: 'power3.out' },
                    '-=0.3'
                );
            }

            if (content) {
                tl.fromTo(content,
                    { opacity: 0, x: 60, rotationY: 15 },
                    { opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: 'power3.out' },
                    '-=0.8'
                );
            }

            if (title) {
                tl.fromTo(title,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
                    '-=0.9'
                );
            }

            if (scheduleItems.length > 0) {
                tl.fromTo(scheduleItems,
                    { opacity: 0, x: 40, scale: 0.95 },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power2.out'
                    },
                    '-=0.6'
                );
            }
        });

        // Statistics counter animation
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));

            gsap.fromTo(stat,
                { innerText: 0 },
                {
                    innerText: target,
                    duration: 2,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    onUpdate: function() {
                        stat.innerText = Math.ceil(this.targets()[0].innerText);
                    }
                }
            );

            // Fade in animation for stat numbers
            gsap.fromTo(stat,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Parallax effects for hero background
        gsap.to('.hero-bg-animation', {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // Enhanced hover effects for interactive elements
        gsap.utils.toArray('.interactive').forEach(element => {
            element.addEventListener('mouseenter', () => {
                gsap.to(element, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Intersection Observer for advanced animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for advanced animations
    document.querySelectorAll('.schedule-item, .highlight-tag').forEach(el => {
        observer.observe(el);
    });

    // Add CSS classes for intersection observer animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in .highlight-tag {
            animation: slideInScale 0.6s ease-out forwards;
            animation-delay: calc(var(--i, 0) * 0.1s);
        }

        @keyframes slideInScale {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(style);

    // Add custom properties for staggered animations
    document.querySelectorAll('.schedule-highlights').forEach(container => {
        const tags = container.querySelectorAll('.highlight-tag');
        tags.forEach((tag, index) => {
            tag.style.setProperty('--i', index);
        });
    });

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or return to top
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: 0 },
                ease: 'power3.inOut'
            });
        }
    });

    // Add touch gesture support for mobile
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndY < touchStartY - swipeThreshold) {
            // Swipe up - scroll to next section
            const sections = document.querySelectorAll('.section');
            // Implementation for section-by-section scrolling
        }
        if (touchEndY > touchStartY + swipeThreshold) {
            // Swipe down - scroll to previous section
            // Implementation for section-by-section scrolling
        }
    }

    // Performance optimization: Pause animations when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.resume();
        }
    });

    // Add resize handler for responsive adjustments
    window.addEventListener('resize', gsap.utils.debounce(() => {
        ScrollTrigger.refresh();
    }, 250));

    console.log('🎋 京城十日志 - 页面加载完成');
});