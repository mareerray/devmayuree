// Scroll-reveal animation for portfolio & mobile cards
// Respects prefers-reduced-motion — skips animation entirely if set.

(function () {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const targets = document.querySelectorAll(
    '.portfolio__card, .mobile-card, .section__title'
  );

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
})();

// Split-text hero animation (word-level, load-time only)
(function () {
  const heading = document.querySelector('.section__title--intro');
  if (!heading || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let i = 0;
  function splitWords(node) {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((w) => {
          if (w.trim() === '') { frag.appendChild(document.createTextNode(w)); return; }
          const span = document.createElement('span');
          span.className = 'split-word';
          span.textContent = w;
          span.style.animationDelay = `${i++ * 60}ms`;
          frag.appendChild(span);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        splitWords(child);
      }
    });
  }
  splitWords(heading);
})();

// Custom cursor — desktop pointer devices only
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);

  window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('a, button, .btn, .work-btn').forEach((el) => {
    el.addEventListener('mouseenter', () => dot.classList.add('is-active'));
    el.addEventListener('mouseleave', () => dot.classList.remove('is-active'));
  });
}