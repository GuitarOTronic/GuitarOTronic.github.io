
function showHamburger(){
  let menu = document.getElementById('menu')
  let classes = menu.classList.value
  
  if(classes.includes('showMe')){
    menu.classList.remove('showMe')
  }else{
    menu.classList.add('showMe')
  }
}
