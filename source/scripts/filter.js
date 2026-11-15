const slider = document.getElementById('slider');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

// const form = document.querySelector('.filter');

const MIN_COUNT = 0;
const MAX_COUNT = 1000;

const initfilter = () => {
  if (slider && window.noUiSlider) {
    noUiSlider.create(slider, {
      start: [0, 900],
      connect: true,
      range: {
        min: MIN_COUNT,
        max: MAX_COUNT,
      },
      format: {
        to: (value) => Math.round(value),
        from: (value) => Number(value),
      },
    });

    slider.noUiSlider.on('update', (values, handle) => {
      if (handle === 0) {
        minPrice.value = values[0] === 0 ? '' : values[0];
      } else {
        maxPrice.value = values[1];
      }
    });

    minPrice.addEventListener('change', () => {
      const inputValue = '' ? MIN_COUNT : Number(minPrice.value);
      slider.noUiSlider.set([inputValue, null]);
    });

    maxPrice.addEventListener('change', () => {
      const inputValue = '' ? MAX_COUNT : Number(maxPrice.value);
      slider.noUiSlider.set([null, inputValue]);
    });
  }
};

export default initfilter;
