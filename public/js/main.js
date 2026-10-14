// Shared behaviour for every page: nav border on scroll and reveal-on-scroll.

const navbar = document.getElementById('navbar');
if (navbar) {
  const updateNav = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}
