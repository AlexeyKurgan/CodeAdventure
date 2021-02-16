const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const themeBtn = document.querySelectorAll('.footer__settings-theme-btn');

function setThemeColor(btnArr){
  btnArr.map((item)=>{

    item.addEventListener('click',(e)=>{
      let selectedTheme = {
        light:header.className + ' theme_light',
        dark:footer.className,
      };

      console.log(selectedTheme)
    // let headerClass = header.classList.contains('theme_light');
    // localStorage.setItem('header',header.className);
    // localStorage.setItem('footer',footer.className);

    let res = localStorage.getItem('header') + ' "header" ';
    let res2 = localStorage.getItem('footer') + ' "header" ';
    console.log(res)
    console.log(res2)
      // localStorage.setItem('selectedTheme',JSON.stringify(selectedTheme));
      // let theme = JSON.parse(localStorage.getItem('selectedTheme'));
        
        // let lightTheme = header.className.split(' ').slice(1).join();
        // console.log(lightTheme);
      // if(e.target.id === 'lt' &&  theme.light === false){
      // if(e.target.id === 'lt' && headerClass === false){
      if(e.target.id === 'lt'){
       
        
        // theme.light = true;
        // theme.dark = false;
        // localStorage.setItem('selectedTheme',JSON.stringify(theme));
       
        



        header.classList.add('theme_light');
        footer.classList.add('theme_light');
        btnArr[0].classList.add('active');
        btnArr[1].classList.remove('active'); 

        

        // console.dir(header.className)
        // console.log(header);
        // console.log(footer);
        console.log(header.classList.contains('theme_light'))
        console.log(footer.classList.contains('theme_light'))


        // localStorage.setItem('header', header.classList.contains('theme_light'))
      }
      // console.log(theme.light + ' light')
      // console.log(theme.dark + ' dark')

      // if(e.target.id === 'dk' && theme.dark){
      if(e.target.id === 'dk'){
      // if(e.target.id === 'dk' && headerClass){
        // localStorage.setItem('header', header.classList.contains('theme_light'))
        // theme.dark === false
        // theme.light = false;
        // theme.dark = true;
        // localStorage.setItem('selectedTheme',JSON.stringify(theme));

        header.classList.remove('theme_light');
        footer.classList.remove('theme_light');
        btnArr[1].classList.add('active');
        btnArr[0].classList.remove('active');

        // console.dir(header.className)
        // console.log(header);
        // console.log(footer);
        console.log(header.classList.contains('theme_light'))
        console.log(footer.classList.contains('theme_light'))
      }

      // let lightTheme = header.className.split(' ').slice(1).join();
      // console.log(lightTheme);
    })
  })
  
}

setThemeColor([...themeBtn]);