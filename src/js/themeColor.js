const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const themeBtn = document.querySelectorAll('.footer__settings-theme-btn');

function setThemeColor(btnArr){
  btnArr.map((item)=>{
    item.addEventListener('click',(e)=>{
      // const storage = {
      //   selectedTheme:false
      // }
      // localStorage.setItem('theme_color',JSON.stringify(storage));

      let selectedTheme = false;
     
      localStorage.setItem('selectedTheme',selectedTheme);


      // console.log(localStorage.getItem('theme_color'));
      

      if(e.target.id === 'lt' && selectedTheme === false){
        
        // storage.light = true;
        // storage.dark = false;

        // console.log(storage);
        // localStorage.selectedTheme = true;
        console.log(localStorage.selectedTheme);
        // console.log(localStorage.getItem('theme_color'));
        // localStorage.setItem('light_theme','test')
        // localStorage.setItem('test1', header.classList.add('theme_light'))
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
        //   light:e.target.outerHTML,
        //   btn1 : btnArr[0].outerHTML,
        //   btn2 : btnArr[1].outerHTML,
        // };
        
        // localStorage.setItem('theme_light', JSON.stringify(storage))
        // console.log(JSON.parse(localStorage.getItem('theme_light')));
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