function outsideClick(callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    if (element.contains) {
      callback();
    }
  }
}
