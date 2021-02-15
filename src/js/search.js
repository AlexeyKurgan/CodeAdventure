const searchBtn = document.querySelector('.header__search-container');
const searchPopup = document.querySelector('.header__form-search');
const searchPopupClose = document.querySelector('.header__form-close');

searchBtn.addEventListener('click',()=>{
    searchPopup.classList.add('header__form-search_visible');
})

searchPopupClose.addEventListener('click',()=>{
  searchPopup.classList.remove('header__form-search_visible');
})
