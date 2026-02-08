function toggleMenu(){
  const el = document.getElementById("mobileMenu");
  el.classList.toggle("show");
}

function fakeSubmit(e){
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  if (msg) msg.textContent = "Дякую! Я скоро зв’яжусь з вами.";
  e.target.reset();
  return false;
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length){
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
