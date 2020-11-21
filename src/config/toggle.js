function onMenuToggle() {
  const slideToggle = document.querySelector(".nav_bar")
  
  if(slideToggle.style.left == "-55px") {
    slideToggle.style.left = "-255px"
  } else {
    slideToggle.style.left = "-55px"
  }  
}