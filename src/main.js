import { getImages } from './js/pixaday-api.js';
import { renderImages } from './js/render-functions.js';
const refs = {
  InputData: document.querySelector('.js-form-inline'),
  loader: document.querySelector('.loader'),
  gallery: document.querySelector('.gallery'),
};
refs.InputData.addEventListener('submit', handleInputData);

function handleInputData(e) {
  e.preventDefault();

  console.log('Form element:', e.target);
  const searchData = new FormData(e.target);
  const searchDatavalue = searchData.get('imgSearch');
  console.log(searchDatavalue);

  if (!searchDatavalue) return;
  refs.gallery.innerHTML = '';
  refs.loader.style.display = 'block';

  getImages(searchDatavalue)
    .then(images => {
      renderImages(images);
      console.log(images);
    })
    .catch(() => console.log('Handled error'))
    .finally(() => {
      refs.loader.style.display = 'none';
      e.target.reset();
    });
}
