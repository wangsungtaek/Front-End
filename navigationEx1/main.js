const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', ()=>{
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
