import iziToast from 'izitoast';
import { getImages, PER_PAGE } from './js/pixaday-api.js';
import { renderImages } from './js/render-functions.js';

const refs = {
  InputData: document.querySelector('.js-form-inline'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  loadElem: document.querySelector('.loader'),
};

let currentPage = 1;
let totalPages = 0;
let searchQuery = '';

refs.InputData.addEventListener('submit', handleInputData);

async function handleInputData(e) {
  e.preventDefault();
  showSpinner('form');
  refs.btnLoadMore.classList.add('hidden'); // Приховуємо "Load More" при новому пошуку
  currentPage = 1;
  const searchData = new FormData(e.target);
  const searchDatavalue = searchData.get('imgSearch').trim();
  searchQuery = searchDatavalue;
  if (!searchDatavalue) {
    refs.loadElem.classList.add('hidden');
    return;
  }
  refs.gallery.innerHTML = '';
  try {
    const { images, total } = await getImages(searchDatavalue, currentPage);
    totalPages = total;
    console.log(totalPages);
    renderImages(images);
    hideSpinner();
    checkBtnStatus();
  } catch (error) {
    hideSpinner();
    console.log('Handled error', error);
  } finally {
    e.target.reset();
  }
}
//==========================================
refs.btnLoadMore.addEventListener('click', loadMore);
async function loadMore() {
  showSpinner('button');
  refs.btnLoadMore.classList.add('hidden'); // Ховаємо кнопку
  currentPage += 1;
  try {
    const { images, total } = await getImages(searchQuery, currentPage);
    renderImages(images);
    hideSpinner();
    checkBtnStatus();
    const info = refs.gallery.firstElementChild.getBoundingClientRect();
    const height = info.height;
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.error('Load more error:', error);
    hideSpinner();
  }
  // finally {
  //   hideSpinner();
  // }
}

//=============================================
function checkBtnStatus() {
  const maxPage = Math.ceil(totalPages / PER_PAGE);
  const isLastPage = currentPage >= maxPage;
  console.log(isLastPage);
  if (isLastPage) {
    refs.btnLoadMore.classList.add('hidden');
    iziToast.info({
      message: `We're sorry, but you've reached the end of search results.
`,
      position: 'bottomRight',
    });
  } else {
    refs.btnLoadMore.classList.remove('hidden');
  }
}
function showSpinner(position) {
  refs.loadElem.classList.remove('hidden');

  if (position === 'form') {
    refs.loadElem.style.position = 'relative';
    refs.loadElem.style.margin = '10px auto';
    refs.InputData.after(refs.loadElem);
  } else if (position === 'button') {
    refs.loadElem.style.position = 'absolute';
    refs.loadElem.style.margin = '20px auto';
    refs.btnLoadMore.after(refs.loadElem);
  }
}

// Функція приховування спінера
function hideSpinner() {
  refs.loadElem.classList.add('hidden');
}
