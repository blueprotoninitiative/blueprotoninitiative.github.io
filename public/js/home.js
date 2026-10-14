// Home page: atom logo parallax, orbiting dot and animated stat counters.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Atom parallax + rotate + fade
const atomWrapper = document.querySelector('.atom-wrapper');
const atom = document.getElementById('atomLogo');
let atomVisible = true;
function updateAtom() {
  const s = window.scrollY;
  const fade = Math.max(0, 1 - s / (window.innerHeight * 0.55));
  atomVisible = fade > 0;
  atomWrapper.style.top = (120 + s * 0.75) + 'px';
  atomWrapper.style.opacity = fade;
  atom.style.transform = `rotate(${s * 0.4}deg)`;
}
window.addEventListener('scroll', updateAtom, { passive: true });
updateAtom();

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
