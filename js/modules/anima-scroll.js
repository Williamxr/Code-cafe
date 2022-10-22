export default function initAnimaScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  function animaScroll(){
    console.log('sim');
  }
  
  window.addEventListener('scroll', animaScroll);
}
