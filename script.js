// ─── Loader ───────────────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hide');
  }, 1800);
});

// ─── Scroll Progress ──────────────────────────────────────
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  scrollBar.style.width = pct + '%';
});

// ─── Custom Cursor ────────────────────────────────────────
const cur = document.getElementById('cursor');
const curF = document.getElementById('cursor-follower');
let mx = 0, my = 0, fx = 0, fy = 0;
window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
(function animCursor() {
  fx += (mx - fx) * 0.12; fy += (my - fy) * 0.12;
  curF.style.left = fx + 'px'; curF.style.top = fy + 'px';
  requestAnimationFrame(animCursor);
})();
document.querySelectorAll('a,button,.project-card,.ach-card').forEach(el => {
  el.addEventListener('mouseenter', () => { curF.style.width = '50px'; curF.style.height = '50px'; });
  el.addEventListener('mouseleave', () => { curF.style.width = '30px'; curF.style.height = '30px'; });
});

// ─── Navbar ───────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => { navLinks.classList.remove('open'); hamburger.classList.remove('open'); });
});

// ─── Active Nav on Scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(n => n.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));

// ─── Theme Toggle ─────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
let dark = true;
themeToggle.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? '' : 'light');
  themeToggle.innerHTML = dark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// ─── Typewriter ───────────────────────────────────────────
const words = ['Software Developer', 'AI & ML Enthusiast', 'Open Source Contributor', 'Google ELP Co-Lead', 'Tech Community Builder'];
let wi = 0, ci = 0, del = false;
const tw = document.getElementById('typewriter');
function typeLoop() {
  const word = words[wi];
  tw.textContent = del ? word.slice(0, ci--) : word.slice(0, ci++);
  if (!del && ci > word.length) { del = true; setTimeout(typeLoop, 1200); return; }
  if (del && ci < 0) { del = false; wi = (wi + 1) % words.length; ci = 0; }
  setTimeout(typeLoop, del ? 50 : 90);
}
typeLoop();

// ─── Particle Canvas ──────────────────────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.r = Math.random() * 2 + 0.5;
  this.vx = (Math.random() - 0.5) * 0.4;
  this.vy = (Math.random() - 0.5) * 0.4;
  this.alpha = Math.random() * 0.6 + 0.1;
}
for (let i = 0; i < 120; i++) particles.push(new Particle());

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
    ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
  // Lines
  particles.forEach((a, i) => {
    particles.slice(i + 1).forEach(b => {
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 120) {
        ctx.beginPath();
        ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - d / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

// ─── Stat Counter ─────────────────────────────────────────
function animateCount(el, target, isFloat) {
  let cur = 0, step = target / 60;
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = isFloat ? cur.toFixed(2) : Math.floor(cur) + '+';
    if (cur >= target) { el.textContent = isFloat ? target : target + '+'; clearInterval(timer); }
  }, 25);
}
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(el => {
        const val = parseFloat(el.dataset.count);
        animateCount(el, val, el.dataset.count.includes('.'));
      });
      statsObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObs.observe(heroStats);

// ─── Reveal on Scroll ─────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.style.getPropertyValue('--delay') || '0s';
      setTimeout(() => e.target.classList.add('visible'), parseFloat(delay) * 1000);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => revealObs.observe(el));

// ─── Back To Top ──────────────────────────────────────────
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ─── Contact Form ─────────────────────────────────────────
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const msg = document.getElementById('contactMsg').value;
  const note = document.getElementById('formNote');
  const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=ruchakatte@gmail.com&su=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + name + ' <' + email + '>')}`;
  window.open(mailto, '_blank');
  note.textContent = '✅ Opening Gmail to send your message!';
  e.target.reset();
  setTimeout(() => note.textContent = '', 4000);
});

// ─── Resume Download ──────────────────────────────────────
// Download is handled natively via the HTML `download` attribute on the link.