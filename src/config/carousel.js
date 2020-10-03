// File for creation of carousel animation
const carouselContainer = document.querySelector(".carouselContainer")
const carouselSlider = document.querySelector(".carouselSlider")
const nextButton = document.querySelector(".nextButton")
const prevButton = document.querySelector(".prevButton")

let imgSlide = document.querySelectorAll(".slidesImg")
let counter = 1
let slideInterval

const firstCloneSlide = imgSlide[0].cloneNode(true)
const lastCloneSlide = imgSlide[imgSlide.length - 1].cloneNode(true)

firstCloneSlide.id = 'firstImg'
lastCloneSlide.id = 'lastImg'

carouselSlider.append(firstCloneSlide)
carouselSlider.prepend(lastCloneSlide)


const imgWidth = imgSlide[counter].clientWidth + 10;

carouselSlider.style.transform = `translateX(${-imgWidth * counter}px)`

const interval = 5000;

const carouselLoop = () => {
  slideInterval = setInterval(() => {
    moveToNextImg()
    console.log(imgWidth)
  }, interval)
}

const getCarouselImgSlide = () => document.querySelectorAll(".slidesImg");

carouselSlider.addEventListener('transitionend', () => {
  slides = getCarouselImgSlide();
  if (slides[counter].id === firstCloneSlide.id) {
    carouselSlider.style.transition = 'none';
    counter = 1;
    carouselSlider.style.transform = `translateX(${-imgWidth * counter}px)`;
  }

  if (slides[counter].id === lastCloneSlide.id) {
    carouselSlider.style.transition = 'none';
    counter = slides.length - 2;
    carouselSlider.style.transform = `translateX(${-imgWidth * counter}px)`;
  }
});


const moveToNextImg = () => {
  slides = getCarouselImgSlide();
  if (counter >= slides.length - 1) return
  counter++
  carouselSlider.style.transition = `600ms ease-out`
  carouselSlider.style.transform = `translateX(${-imgWidth * counter}px)`
}

const moveToPrevImg = () => {
  slides = getCarouselImgSlide();
  if (counter <= 0) return
  counter--
  carouselSlider.style.transition = `600ms ease-out`
  carouselSlider.style.transform = `translateX(${-imgWidth * counter}px)`
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 39:
      moveToNextImg();
      break;
    case 37:
      moveToPrevImg();
      break;
  }
};

nextButton.addEventListener('click', moveToNextImg);
prevButton.addEventListener('click', moveToPrevImg);

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

carouselContainer.addEventListener('mouseleave', carouselLoop);

carouselLoop()