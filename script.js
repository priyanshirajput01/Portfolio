document.documentElement.classList.add("js");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Typing effect for roles
const typedEl = document.getElementById("typed");
const roles = ["Full Stack Web Developer", "Front-End Enthusiast", "Cyber Security Student"];
let roleIndex = 0, charIndex = 0, deleting = false;

function typeRoles() {
  const word = roles[roleIndex];
  typedEl.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex === word.length) {
    deleting = true;
    return setTimeout(typeRoles, 1400);
  }
  if (deleting && charIndex === 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }
  charIndex += deleting ? -1 : 1;
  setTimeout(typeRoles, deleting ? 40 : 80);
}
reduceMotion ? (typedEl.textContent = roles[0]) : typeRoles();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }
});

// Highlight the menu item of the section on screen
const links = menu.querySelectorAll("a");
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(sec => spy.observe(sec));

// Scroll reveal
const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add("in");
      reveal.unobserve(el);
      setTimeout(() => { el.style.transitionDelay = ""; }, 1000);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".rv").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 80 + "ms";
  reveal.observe(el);
});

// Count-up numbers in the hero
document.querySelectorAll("[data-count]").forEach(el => {
  const target = +el.dataset.count;
  if (reduceMotion) { el.textContent = target; return; }
  let n = 0;
  const timer = setInterval(() => {
    el.textContent = ++n;
    if (n >= target) clearInterval(timer);
  }, 260);
});

// Marquee: repeat the icons so the loop is seamless
const track = document.getElementById("track");
track.innerHTML += track.innerHTML;

// Progress bar and back-to-top button
const progress = document.getElementById("progress");
const topBtn = document.getElementById("top");
window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / max * 100) + "%";
  topBtn.classList.toggle("show", window.scrollY > 600);
}, { passive: true });

// Soft light that follows the mouse, and 3D tilt on cards (mouse devices only)
if (window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
  const glow = document.getElementById("glow");
  window.addEventListener("mousemove", e => {
    glow.style.opacity = 1;
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
  document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", e => {
      const box = card.getBoundingClientRect();
      const x = (e.clientX - box.left) / box.width - 0.5;
      const y = (e.clientY - box.top) / box.height - 0.5;
      card.style.transform = "perspective(800px) rotateY(" + x * 8 + "deg) rotateX(" + -y * 8 + "deg) translateY(-4px)";
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

// Contact form opens the visitor's email app with the message filled in
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("fname").value.trim();
  const message = document.getElementById("fmsg").value.trim();
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\n- " + name);
  location.href = "mailto:priyanshirajput220@gmail.com?subject=" + subject + "&body=" + body;
});

document.getElementById("year").textContent = new Date().getFullYear();

// Background: drifting glowing dots joined by thin lines
const canvas = document.getElementById("net");
const ctx = canvas.getContext("2d");
let width, height, dots = [];

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  const count = Math.min(70, Math.floor(width * height / 22000));
  dots = Array.from({ length: count }, () => ({
    x: Math.random() * width, y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.8,
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (const d of dots) {
    if (!reduceMotion) {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0 || d.x > width) d.vx *= -1;
      if (d.y < 0 || d.y > height) d.vy *= -1;
    }
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(160, 235, 255, 0.85)";
    ctx.fill();
  }
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
      if (dist < 140) {
        ctx.strokeStyle = "rgba(139, 92, 246, " + 0.35 * (1 - dist / 140) + ")";
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }
  if (!reduceMotion) requestAnimationFrame(draw);
}
window.addEventListener("resize", () => { resize(); if (reduceMotion) draw(); });
resize();
draw();