// Progressive enhancement: no text splitting or custom cursor.
(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll('.portfolio-home .about-photo');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (isIntersecting) {
                target.classList.add('is-visible');
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.1 });
    targets.forEach((target) => {
        target.classList.add('reveal');
        observer.observe(target);
    });
    preference.addEventListener('change', () => {
        if (preference.matches) {
            targets.forEach((target) => target.classList.add('is-visible'));
            observer.disconnect();
        }
    });
})();
