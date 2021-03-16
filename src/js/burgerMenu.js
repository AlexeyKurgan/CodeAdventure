const mobileMenu = document.querySelector('.header__burger-menu');

mobileMenu.addEventListener('click', e => {
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
})