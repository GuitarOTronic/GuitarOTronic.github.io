
function toggleHamburger(){
  let dropMenu = document.getElementById('dropMenu')
  let hamburger = document.getElementById('hamburger')
  let classes = dropMenu.classList.value

  if(classes.includes('showMe')){
    dropMenu.classList.remove('showMe')
  } else {
    dropMenu.classList.add('showMe')
  }
}
