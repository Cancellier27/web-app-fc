// File for creation of carousel animation
const carouselSlider = document.querySelector(".carouselSlider")

let carouselImages = document.querySelectorAll(".carouselSlider img")

let counter = 1
const imgSize = carouselImages[counter].clientWidth + 24;
const interval = 1000;
// carouselSlider.style.transform = `translateX(-${imgSize * counter}px)`


function carouselLoop() {
  setInterval(() => {
    carouselSlider.style.transition = `700ms ease-out`
    carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`
    counter++
  }, interval)
}

carouselSlider.addEventListener('transitionend', () => {
  carouselImages = document.querySelectorAll(".carouselSlider img")
  if (carouselImages[counter].id === "lastImg") {
    console.log('oi')
    carouselSlider.style.transition = "none"
    counter = 1
    carouselSlider.style.transform = `translateX(${0}px)`
  }
})


carouselLoop()