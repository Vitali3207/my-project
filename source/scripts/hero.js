const hero = document.querySelector('.hero');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.hero__arrow--prev');
const nextButton = document.querySelector('.hero__arrow--next');
const paginationBtn = document.querySelectorAll('.hero__pagination-btn');

let currentIndex = 0;

const updateSlide = (index) => {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('slide--active', slideIndex === index);
  });

  paginationBtn.forEach((button, buttonIndex) => {
    button.classList.toggle('hero__pagination-btn--active', buttonIndex === index);
  });

  const theme = slides[index].dataset.theme;
  hero.className = `hero hero--${theme}`;

  prevButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;
};

const initSlider = () => {
  if (!hero || !slides.length) {
    return;
  }

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlide(currentIndex);
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateSlide(currentIndex);
    }
  });

  paginationBtn.forEach((button, buttonIndex) => {
    button.addEventListener('click', () => {
      currentIndex = buttonIndex;
      updateSlide(currentIndex);
    });
  });

  updateSlide(currentIndex);
};

export default initSlider;
