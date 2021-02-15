const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const themeBtn = document.querySelectorAll('.footer__settings-theme-btn');

function setThemeColor(btnArr){
  btnArr.map((item)=>{
    item.addEventListener('click',(e)=>{
    
      if(e.target.id === 'lt'){
        // localStorage.setItem('light_theme','test')
        // const lightTheme = {
        //   header: header.classList.add('theme_light'),
        //   footer: footer.classList.add('theme_light'),
        //   'lightTheme-button': btnArr[0].classList.add('active'),
        //   'darkTheme-button': btnArr[1].classList.remove('active'),
        // }
        
        // console.log(lightTheme);
        
        // console.log(header.setAttribute('theme','light_theme'));
        // console.log(header.getAttribute('theme'));

        header.classList.add('theme_light');
        footer.classList.add('theme_light');
        btnArr[0].classList.add('active');
        btnArr[1].classList.remove('active'); 

        
        // let storage = {
        //   light : localStorage.setItem('light_theme',e.target.outerHTML),
        //   btn1 : localStorage.setItem('btn[0]',btnArr[0].outerHTML),
        //   btn2 : localStorage.setItem('btn[1]',btnArr[1].outerHTML),
        // }
         
        // console.log(localStorage.getItem('btn[0]'))
        // console.log(e)
      }
  
      if(e.target.id === 'dk'){
        header.classList.remove('theme_light');
        footer.classList.remove('theme_light');
        btnArr[1].classList.add('active');
        btnArr[0].classList.remove('active');
      }
    })
  })
  
}

setThemeColor([...themeBtn]);