export default function initAnimaScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const dist = window.innerHeight * 0.7;

  if(sections.length){

    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - dist) < 0
        if(isSectionVisible){
          section.classList.add('anima');
        }else{
          section.classList.remove('anima');
        }
      })
    }
    
    window.addEventListener('scroll', animaScroll);
  }
}
