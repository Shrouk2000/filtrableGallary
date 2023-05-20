
    let buttons = document.querySelectorAll(".filter button");
    let cards = document.querySelectorAll("img");
  buttons.forEach((btn)=>{
    btn.addEventListener('click',removeAction);
    btn.addEventListener('click',manageImage);


  });
 
  //remove active class from all and add to current
  function removeAction(){
    buttons.forEach((btn)=>{
btn.classList.remove("active");
this.classList.add("active");
    });
  }

  //manage images
  function manageImage(){
    cards.forEach((img)=>{
      img.style.display="none";
    })
  
  document.querySelectorAll(this.dataset.filter).forEach((el)=>{
    el.style.display='block';
  })
  }