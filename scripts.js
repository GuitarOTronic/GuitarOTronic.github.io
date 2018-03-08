
function toggleHamburger(){
  let dropMenu = document.getElementById('dropMenu')
  let hamburger = document.getElementById('hamburger')
  let classes = dropMenu.classList.value

  if(classes.includes('showMe')){
    dropMenu.classList.remove('showMe')
    console.log('dropMenu', dropMenu.classList, 'cancel', cancel.classList);
  } else {
    dropMenu.classList.add('showMe')
  }
}
