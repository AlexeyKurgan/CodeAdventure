(function(){
  const settings = document.querySelectorAll('.settings-group button'),
        postList = document.querySelectorAll('.post-list'),
        postContainer = document.querySelector('.post-container'),
        postImageContainer = document.querySelectorAll('.post-list__img-container'),
        postContent = document.querySelectorAll('.post-list__content'),
        postDesc = document.querySelectorAll('.post-list__content-desc');

  function getSettingsBtn(buttons){
    buttons.forEach(button => {     
    button.addEventListener('click', e => {
      setActiveButton(e);
      getStylesGrid(e);
      });
    });
  }

  function getStylesGrid(e){
    postList.forEach(post => {
      switch(e.target.id){
        case 'filter':

        break;

        case 'sort':
          
        break;

        case 'list':
          postContainer.classList.remove('grid');
          post.classList.remove('grid-item');
          togglePostContentClass();
        break;

        case 'grid':
          postContainer.classList.add('grid');
          post.classList.add('grid-item');
          togglePostContentClass();
        break;
      }
    });
  }

  function setActiveButton(e){
    if(e.target.id === 'list'){
      e.target.classList.add('active');
      e.target.nextElementSibling.classList.remove('active');
    }
    if(e.target.id === 'grid'){
      e.target.classList.add('active');
      e.target.previousElementSibling.classList.remove('active');
    }
  }

  function togglePostContentClass(){
    postImageContainer.forEach(item => {
      // item.classList.toggle('grid-content');
      // item.classList.add('grid-content');
      if(!item.classList.contains('grid-content')){
        console.log(true)
        item.classList.add('grid-content');
      }
    });
    postContent.forEach(item => {
      if(!item.classList.contains('grid-content')){
        console.log(true)
        item.classList.add('grid-content');
      }
      // item.classList.toggle('grid-content');
    });
    postDesc.forEach(item => {
      if(!item.classList.contains('post-desc-mb')){
        console.log(true)
        item.classList.add('post-desc-mb');
      }
      // item.classList.toggle('post-desc-mb');
    });
  }

  getSettingsBtn(settings);
}());


