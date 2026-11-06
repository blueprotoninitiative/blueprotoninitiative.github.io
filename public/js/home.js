// Home page: atom logo parallax/fade, orbiting dot and animated stat counters.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Atom: gentle parallax + fade as the hero scrolls away (no rotation)
const atomWrapper = document.querySelector('.atom-wrapper');
const nav = document.querySelector('nav');
const ATOM_MAX_SHIFT = 40; // px, less than the 50px gap to the eyebrow
let atomVisible = true;
let fadeEnd = 1;
let ticking = false;

function measureAtom() {
  // Document position of the logo (offsetTop ignores transforms)
  const atomTop = atomWrapper.offsetTop + atomWrapper.offsetParent.offsetTop;
  // Fully faded before its top edge can reach the navbar
  fadeEnd = Math.max(1, atomTop - nav.offsetHeight - 8);
}
function updateAtom() {
  ticking = false;
  const p = Math.min(1, Math.max(0, window.scrollY / fadeEnd));
  atomVisible = p < 1;
  atomWrapper.style.transform = `translateY(${p * ATOM_MAX_SHIFT}px)`;
  atomWrapper.style.opacity = 1 - p;
}
if (!reduceMotion) {
  measureAtom();
  updateAtom();
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateAtom); }
  }, { passive: true });
  window.addEventListener('resize', () => { measureAtom(); updateAtom(); }, { passive: true });
  window.addEventListener('load', () => { measureAtom(); updateAtom(); });
}

// Orbiting dot (skipped while the atom is faded out)
const orbitDot = document.getElementById('orbitDot');
let orbitAngle = 0;
function animateOrbit() {
  if (atomVisible) {
    orbitAngle += 0.018;
    orbitDot.setAttribute('cx', 40 + 36 * Math.cos(orbitAngle));
    orbitDot.setAttribute('cy', 40 + 14 * Math.sin(orbitAngle));
  }
  requestAnimationFrame(animateOrbit);
}
if (!reduceMotion) animateOrbit();

// Animated counters
function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1200;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

if (!reduceMotion && 'IntersectionObserver' in window) {
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        statObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));
}
