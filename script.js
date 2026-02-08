function toggleMenu(){
  const el = document.getElementById("mobileMenu");
  el.classList.toggle("show");
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal + stagger
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length){
  // optional stagger for groups (services/cards)
  const addStagger = (selector, step = 90) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add("stagger");
      el.style.setProperty("--delay", `${i * step}ms`);
    });
  };

  addStagger(".services .reveal", 90);
  addStagger(".pinterest .reveal", 110);
  addStagger(".pricing-grid .reveal", 120);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}
