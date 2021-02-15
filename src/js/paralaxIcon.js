// container for paralax
const signUpContainer = document.querySelector('.sign-up'),
      jsAdventureContainer = document.querySelector('.js-adventure'),
      htmlAdventureContainer = document.querySelector('.html-adventure'),
      cssAdventureContainer = document.querySelector('.css-adventure');
// icons for paralax
const stars = document.querySelectorAll('.paralax-star'),
      jsAdventureIcons = document.querySelectorAll('.js-adventure__icon'),
      htmlAdventureIcons = document.querySelectorAll('.html-adventure__icon'),
      cssAdventureIcons = document.querySelectorAll('.css-adventure__icon');
// coordinates
let percentY,percentX;

const getParalaxEffect = function (containerParalax,icons){
  containerParalax.addEventListener('mousemove', (e) => {
   
    percentX = ((e.clientX - containerParalax.clientWidth) * 50 / containerParalax.clientWidth) + ((e.clientX) * 50 / containerParalax.clientWidth);
    percentY = ((e.clientY - containerParalax.clientHeight) * 50 / containerParalax.clientHeight) + ((e.clientY) * 50 / containerParalax.clientHeight);
  
    icons.forEach(icon => {
        switch (icon.dataset.size) {
            case 'nano':
                icon.style.transform = 'translate('+percentX/-1.2+'%, '+percentY/-1.2+'%)';                
                break;
            case 'small':
                icon.style.transform = 'translate('+percentX/-1.5+'%, '+percentY/-1.5+'%)';                
                break;
            case 'medium':
                icon.style.transform = 'translate('+percentX/-1.9+'%, '+percentY/-0.9+'%)';                
                break;
            case 'large':
                icon.style.transform = 'translate('+percentX/-1.5+'%, '+percentY/-0.9+'%)';                
                break;
        }
    });
  });
} 

getParalaxEffect(signUpContainer,stars);
getParalaxEffect(jsAdventureContainer,jsAdventureIcons);
getParalaxEffect(htmlAdventureContainer,htmlAdventureIcons);
getParalaxEffect(cssAdventureContainer,cssAdventureIcons);

