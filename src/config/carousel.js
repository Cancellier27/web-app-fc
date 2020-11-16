const slidesImages = document.querySelectorAll('.slidesImg')
const carouselContainer = document.querySelector('.carouselContainer')

let timeInterval;
const interval = 5000

function ImageSlider(orientation) {
  const imgSelected = document.querySelector('.selected');
  imgSelected.classList.remove('selected');

  if (orientation === 'next') {
    if (imgSelected.nextElementSibling) {
      imgSelected.nextElementSibling.classList.add('selected');
    } else {
      slidesImages[0].classList.add('selected');
    }
  } else {
    if (imgSelected.previousElementSibling) {
      imgSelected.previousElementSibling.classList.add('selected');
    } else {
      slidesImages[slidesImages.length - 1].classList.add('selected');
    }
  }
};

function carouselLoop() {
  timeInterval = setInterval(() => ImageSlider('next'), interval)
}

carouselContainer.addEventListener('mouseenter', () => {
  clearInterval(timeInterval);
});

carouselContainer.addEventListener('mouseleave', carouselLoop);

carouselLoop()
