const menu = document.getElementById('menu');
const mobileNav = document.getElementById('openNav');


menu.addEventListener('click', () => {
  mobileNav.style.display = 'flex'
})

const mobileNavClose = document.getElementById('close');
mobileNavClose.addEventListener('click', () => {
  mobileNav.style.display = 'none'
})

