// File for creation of carousel animation
const carouselSlider = document.querySelector(".carouselSlider")

let carouselImages = document.querySelectorAll(".carouselSlider img")

let counter = 1
let slideInterval

const imgSize = carouselImages[counter].clientWidth + 14;
const interval = 1000;
carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`


const carouselLoop = () => {
  slideInterval = setInterval(() => {
    moveToNextImg()
  }, interval)
}

const getCarouselSlide = () => document.querySelectorAll(".carouselSlider img");


carouselSlider.addEventListener('transitionend', () => {
  slides = getCarouselSlide();
  if (slides[counter].id === "lastImg") {
    carouselSlider.style.transition = 'none';
    counter = 1;
    carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`;
  }

  if (slides[counter].id === "firstImg") {
    carouselSlider.style.transition = 'none';
    counter = slides.length - 2;
    carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`;
  }
});




const moveToNextImg = () => {
  counter++
  carouselSlider.style.transition = `700ms ease-out`
  carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`
}

// carouselLoop()