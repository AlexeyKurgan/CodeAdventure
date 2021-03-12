const settings = document.querySelectorAll('.settings-group button');

function getSettingsBtn(buttons){
    buttons.forEach(button => {
     
      button.addEventListener('click', e => {
        switch(e.target.id){
        case 'filter':
            console.log(e)
            console.log('filter')
        break;

        case 'sort':
          
            console.log(e)
            console.log('sort')
      
        break;

        case 'grid':
          // button.addEventListener('click',setGridButtonStyle);
          setGridButtonStyle()
        break;

        case 'list':
          // button.addEventListener('click',setListButtonStyle);
         
        break;
      }
      })
    })
}

function setListButtonStyle(e){
  const postList = document.querySelectorAll('.post-list');
  const postContainer = document.querySelector('.post-container');
  postContainer.classList.remove('grid');

  postList.forEach(post => {
    post.style.width = '100%';
  })
  postContainer.classList.remove('grid');
}

function setGridButtonStyle(){
  const postList = document.querySelectorAll('.post-list');
  const postContainer = document.querySelector('.post-container');

  postList.forEach(post => {
    post.style.width = '45%';
  })
  
  postContainer.classList.add('grid');
  // e.target.classList.add('active')
}

getSettingsBtn(settings)
