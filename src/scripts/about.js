const menuAbout = document.getElementById('menuAbout');
const openNavAbout = document.getElementById('openNavAbout');
const mobileNavCloseAbout = document.getElementById('closeAbout');

menuAbout.addEventListener('click', () => {
  openNavAbout.style.display = 'flex';
});

mobileNavCloseAbout.addEventListener('click', () => {
  openNavAbout.style.display = 'none';
});