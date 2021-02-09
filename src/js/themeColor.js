const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const themeBtn = document.querySelectorAll('.footer__settings-theme-btn');


[...themeBtn].map((item)=>{
  item.addEventListener('click',(e)=>{

    if(e.target.id === 'lt'){
      header.classList.add('theme_light');
      footer.classList.add('theme_light');
    }

    if(e.target.id === 'dk'){
      header.classList.remove('theme_light');
      footer.classList.remove('theme_light');
    }

    e.target.classList.contains('active');

    // if(this.classList.contains('active')){
    //    this.classList.remove('active');
    // }else{
    //   this.classList.add('active');
    // }
    
  })
})