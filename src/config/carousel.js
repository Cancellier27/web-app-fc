// File for creation of carousel animation
const carouselContainer = document.querySelector(".carouselContainer")
const carouselSlider = document.querySelectorAll(".carouselSlider")

let imgSlide = document.querySelectorAll(".slidesImg")
let counter = 1
// let slideInterval

const firstCloneSlide = imgSlide[0].cloneNode(true)
const lastCloneSlide = imgSlide[imgSlide.length - 1].cloneNode(true)

// const imgSize = carouselImages[counter].clientWidth + 10;
// const interval = 1000;
// carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`


// const carouselLoop = () => {
//   slideInterval = setInterval(() => {
//     moveToNextImg()
//   }, interval)
// }

// const getCarouselSlide = () => document.querySelectorAll(".slidesImg");


// carouselSlider.addEventListener('transitionend', () => {
//   slides = getCarouselSlide();
//   if (slides[counter].id === "lastImg") {
//     carouselSlider.style.transition = 'none';
//     counter = 1;
//     carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`;
//   }

//   if (slides[counter].id === "firstImg") {
//     carouselSlider.style.transition = 'none';
//     counter = slides.length - 2;
//     carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`;
//   }
// });




// const moveToNextImg = () => {
//   counter++
//   carouselSlider.style.transition = `700ms ease-out`
//   carouselSlider.style.transform = `translateX(${-imgSize * counter}px)`
// }

// // carouselLoop()