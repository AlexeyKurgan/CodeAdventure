const mobileMenu = document.querySelector('.header__burger-menu');
// const mobileMenuTest = document.querySelector('.header__burger-menu');
// console.log(mobileMenuTest)

// mobileMenuTest.forEach(item => {
//   item.addEventListener('click',e => {
//     e.stopPropagation();
//     console.log('e', e)
//     console.log('e.target', e)
//     console.log('children',e.target.children)
//   })
// })


mobileMenu.addEventListener('click', e => {
  
  // e.stopPropagation();
  const span = [...e.path[0].children];
  console.log(span)
  // console.log(e.path[0].children)
  // console.log('click burger menu container', span);


  // span.forEach(item => {
  //   console.log(item, 'click span');
  //   item.classList.toggle('burger-active');
  // })
})