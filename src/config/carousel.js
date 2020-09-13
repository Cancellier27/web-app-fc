// File for creation of carousel animation
const carouselSlider = document.querySelector(".carouselSlider")
const carouselImages = document.querySelectorAll(".carouselSlider img")

let counter = 0
const imgSize = carouselImages[counter].clientWidth + 24;

function carouselLoop (slider) {
  

  setInterval(() => {
    console.log(imgSize, counter)
    slider.style.transition = `transform 1000ms ease-in-out`
    slider.style.transform = `translateX(-${imgSize * counter + 1}px)`
    counter += 1

    if (carouselImages[counter].id === "lastImg") {
      console.log("acabou")
      counter = 1
      slider.style.transition = "none" 
      slider.style.transform = `translateX(0px)`
    }
  } ,3000)
}



carouselLoop(carouselSlider)