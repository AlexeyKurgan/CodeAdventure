const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const themeBtns = document.querySelectorAll('.footer__settings-theme-btn');
 
function setThemeColor(btns) {
  let isLight = localStorage.getItem('isLight');
      updateTheme();
 
  btns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      isLight = ev.target.id === 'lt';
      localStorage.setItem('isLight', isLight || '');
      updateTheme();
    });
  });
 
  function updateTheme() {
    [header, footer].forEach(el =>
      el.classList[isLight ? 'add' : 'remove']('theme_light'));
 
    btns[0].classList[isLight ? 'add' : 'remove']('active');
    btns[1].classList[isLight ? 'remove' : 'add']('active');
  }
}
 
setThemeColor(themeBtns);