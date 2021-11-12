Array.from(document.querySelectorAll('.navigation-button')).forEach((item) => {
  console.log('here');
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle('change');
  }
});