// File for creation of carousel animation
const carouselSlider = document.querySelector(".carouselSlider")
const carouselImages = document.querySelectorAll(".carouselSlider img")

function carouselLoop (slider) {
  let counter = 1
  const imgSize = carouselImages[counter].clientWidth + 24;
  setInterval(() => {
    console.log(imgSize, counter)
    slider.style.transform = `translateX(-${imgSize * counter}px)`
    counter += 1
  } ,2000)
}

carouselLoop(carouselSlider)