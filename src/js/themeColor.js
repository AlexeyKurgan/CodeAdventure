(function(){

  const header = document.querySelector('.header');
  const footer = document.querySelector('.footer');
  const btns = document.querySelectorAll('.footer__settings-theme-btn');

  function setThemeColor(btns){
    updateTheme();

    btns.forEach(item => {
      item.addEventListener('click', e => {

        switch(e.target.id){
          case 'lt':
            localStorage.setItem('theme_light', 'theme_light')
            updateTheme();
          break;

          case 'dk':
            localStorage.setItem('theme_light', '')
            updateTheme();
          break; 
        }

      })
    })
  }

  function updateTheme(){
    let lightTheme = localStorage.getItem('theme_light');
  
    if(lightTheme){
      header.classList.add(lightTheme);
      footer.classList.add(lightTheme);
      btns[0].classList.add('active');
      btns[1].classList.remove('active');
      return;
    }
      header.classList.remove('theme_light');
      footer.classList.remove('theme_light');
      btns[1].classList.add('active');
      btns[0].classList.remove('active');
  }

  setThemeColor(btns);

}());


