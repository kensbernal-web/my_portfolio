// ── Active nav on scroll ──────────────────────────────
const sections = document.querySelectorAll('section[id], div[id]');
const navItems  = document.querySelectorAll('.nav-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(n => n.classList.remove('active'));
      const link = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));

// ── Bento card entrance ───────────────────────────────
const cards = document.querySelectorAll('.bento-card, .hero-banner');

cards.forEach((el, i) => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(16px)';
  el.style.transition = `opacity .4s ease ${i * 55}ms, transform .4s ease ${i * 55}ms`;
});

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach(c => cardObserver.observe(c));

// ── Mobile nav toggle active on click ────────────────
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(n => n.classList.remove('active'));
    item.classList.add('active');
  });
});
