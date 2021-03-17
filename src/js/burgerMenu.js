const burgerMenu = document.querySelector('.header__burger-menu');
const siteNavMobile = document.querySelector('.header__site-nav-mobile');
const siteNavMobileBottom = document.querySelector('.header__site-nav-mobile-bottom');
const actionsContainer = document.querySelectorAll('.header__actions-container');

burgerMenu.addEventListener('click', e => {

  if(e.target.nodeName === 'DIV'){
    const span = [...e.path[0].children];
    span.forEach(item => {
    item.classList.toggle('burger-active');
    });
  }
  
  if(e.target.nodeName === 'SPAN'){
    const span = [...e.path[1].children];
    span.forEach(item => {
      item.classList.toggle('burger-active');
      });
  }
  siteNavMobile.classList.toggle('header__site-nav-mobile_active');
  siteNavMobileBottom.classList.toggle('header__site-nav-mobile-bottom_active');
  actionsContainer[1].classList.toggle('header__actions-container_active');
})