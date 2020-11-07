let watch = 'black'

function changeColor() {
  if (watch === 'black') {
    document.body.style.backgroundImage = 'url("./src/assets/backgroundWhite.png")'
    watch = 'white'
  } else {
    document.body.style.backgroundImage = 'url("./src/assets/backgroundAll.png")'
    watch = 'black'
  }
}