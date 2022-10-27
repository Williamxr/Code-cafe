export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-tab="anima-scroll"]');
  const dist = window.innerHeight * 0.7;

  function animaScroll() {
    if (sections.length) {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - dist) < 0;
        if (isSectionVisible) {
          section.classList.add('anima');
        } else {
          section.classList.remove('anima');
        }
      });
    }
    window.addEventListener('scroll', animaScroll);
  }
  animaScroll();
}
